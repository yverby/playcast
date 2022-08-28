import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { useDebouncedValue } from '@mantine/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Stack, TextInput, MultiSelect } from '@mantine/core';

import type { SelectItem } from '@mantine/core';

import { FIELD, DEFAULTS } from 'src/constants';
import { exploreEntityFormShape } from 'src/store/explore/shapes';

import type { ExploreEntityForm } from 'src/store/explore/types';

interface ExploreFormProps {
  disabled: boolean;
  genres: (string | SelectItem)[];
  onSubmit: (values: ExploreEntityForm) => void;
}

export function ExploreForm({ genres, disabled, onSubmit }: ExploreFormProps) {
  const { formatMessage } = useIntl();

  const form = useForm<ExploreEntityForm>({
    defaultValues: { [FIELD.ID]: [], [FIELD.TERM]: '' },
    resolver: zodResolver(exploreEntityFormShape),
  });

  const id = form.watch(FIELD.ID);
  const [term] = useDebouncedValue(form.watch(FIELD.TERM), DEFAULTS.DELAY);

  useEffect(() => {
    form.handleSubmit(onSubmit)();
  }, [id, term]);

  return (
    <Box component="form" onSubmit={form.handleSubmit(onSubmit)}>
      <Stack>
        <TextInput
          {...form.register(FIELD.TERM)}
          type="search"
          autoComplete="off"
          disabled={disabled}
          aria-label={formatMessage({ id: 'ui.search' })}
          placeholder={formatMessage({ id: 'ui.search' })}
        />

        <MultiSelect
          clearable
          data={genres}
          disabled={disabled}
          placeholder={formatMessage({ id: 'ui.genres' })}
          onChange={(value) => form.setValue(FIELD.ID, value)}
        />
      </Stack>
    </Box>
  );
}
