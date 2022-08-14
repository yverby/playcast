import { useMemo, useEffect } from 'react';
import { isEqual } from 'lodash';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDebouncedValue } from '@mantine/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack, TextInput, SegmentedControl } from '@mantine/core';

import { FIELD, ROUTE, ENTITY } from 'src/constants';
import { searchParamsShape } from 'src/store/search/shapes';
import { selectSearchParams } from 'src/store/search/selectors';

import type { SearchParams } from 'src/store/search/types';

export function SearchForm() {
  const router = useRouter();
  const { formatMessage } = useIntl();

  const params = useSelector(selectSearchParams);

  const form = useForm({
    defaultValues: params,
    resolver: zodResolver(searchParamsShape),
  });

  const entity = form.watch(FIELD.ENTITY);
  const [term] = useDebouncedValue(form.watch(FIELD.TERM), 800);

  const onSubmit = (query: SearchParams) => {
    if (!isEqual(params, { term, entity })) {
      router.replace({ pathname: ROUTE.SEARCH, query });
    }
  };

  const handleChange = (name: keyof SearchParams) => (value: string) => {
    form.setValue(name, value);
  };

  useEffect(() => {
    form.reset(params);
  }, [params]);

  useEffect(() => {
    term && form.handleSubmit(onSubmit)();
  }, [term, entity]);

  const entities = useMemo(
    () =>
      Object.values(ENTITY).map((value) => ({
        value,
        label: formatMessage({ id: `ui.${value}` }),
      })),
    []
  );

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Stack spacing="xs">
        <TextInput
          {...form.register(FIELD.TERM)}
          autoComplete="off"
          aria-label={formatMessage({ id: 'ui.search' })}
          placeholder={formatMessage({ id: 'ui.search' })}
        />

        <SegmentedControl
          value={entity}
          data={entities}
          name={FIELD.ENTITY}
          onChange={handleChange(FIELD.ENTITY)}
        />
      </Stack>
    </form>
  );
}
