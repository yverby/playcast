import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Title } from '@mantine/core';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { Section } from 'src/components/UI';
import { searchActions } from 'src/store/search/actions';

import { SearchForm } from './SearchForm';

export function Search() {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  useEffect(() => {
    dispatch(searchActions.results.init(query));
  }, [query]);

  return (
    <Section>
      <Section.Header>
        <Title order={2}>{formatMessage({ id: 'ui.search' })}</Title>
      </Section.Header>

      <Section.Content>
        <SearchForm />
      </Section.Content>
    </Section>
  );
}
