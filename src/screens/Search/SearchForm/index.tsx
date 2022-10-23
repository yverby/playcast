import { useMemo, useEffect } from 'react';
import { isEqual } from 'lodash';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDebouncedValue } from '@mantine/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack, TextInput, SegmentedControl } from '@mantine/core';

import { useSearchParams } from 'src/store/search/hooks';
import { searchParamsShape } from 'src/store/search/shapes';
import { FIELD, ROUTE, ENTITY, DEFAULTS } from 'src/constants';

import type { SearchParamsState } from 'src/store/search/types';

export function SearchForm() {
  const router = useRouter();
  const { formatMessage } = useIntl();

  const params = useSearchParams(({ state }) => state);

  const form = useForm({
    defaultValues: params,
    resolver: zodResolver(searchParamsShape),
  });

  const entity = form.watch(FIELD.ENTITY);
  const [term] = useDebouncedValue(form.watch(FIELD.TERM), DEFAULTS.DELAY);

  const onSubmit = (query: SearchParamsState) => {
    router.replace({ pathname: ROUTE.SEARCH, query }, undefined, {
      shallow: true,
    });
  };

  const handleChange = (name: keyof SearchParamsState) => (value: string) => {
    form.setValue(name, value);
  };

  useEffect(() => {
    form.reset(params);
  }, [params]);

  useEffect(() => {
    if (term && !isEqual(params, form.getValues())) {
      form.handleSubmit(onSubmit)();
    }
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
          type="search"
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
