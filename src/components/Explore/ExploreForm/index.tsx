import { useEffect } from 'react';
import { isEqual } from 'lodash';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Box, MultiSelect } from '@mantine/core';
import { zodResolver } from '@hookform/resolvers/zod';

import type { SelectItem } from '@mantine/core';

import { FIELD } from 'src/constants';
import { exploreFormShape } from 'src/store/explore/shapes';

import type { ExploreFormValues } from 'src/store/explore/types';

interface ExploreFormProps {
  genres: SelectItem[];
  values: ExploreFormValues;
  onSubmit: (values: ExploreFormValues) => void;
}

export function ExploreForm({ genres, values, onSubmit }: ExploreFormProps) {
  const intl = useIntl();

  const form = useForm<ExploreFormValues>({
    defaultValues: values,
    resolver: zodResolver(exploreFormShape),
  });

  const genre = form.watch(FIELD.GENRE);

  useEffect(() => {
    form.reset(values);
  }, [values]);

  useEffect(() => {
    if (!isEqual(values, form.getValues())) {
      form.handleSubmit(onSubmit)();
    }
  }, [genre]);

  return (
    <Box component="form" onSubmit={form.handleSubmit(onSubmit)}>
      <MultiSelect
        clearable
        data={genres}
        value={genre}
        placeholder={intl.formatMessage({ id: 'ui.genres' })}
        onChange={(value) => form.setValue(FIELD.GENRE, value)}
      />
    </Box>
  );
}
