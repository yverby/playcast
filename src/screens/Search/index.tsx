import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Title } from '@mantine/core';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { Section } from 'src/components/UI';
import { searchActions } from 'src/store/search/actions';

import { SearchForm } from './SearchForm';
import { SearchResults } from './SearchResults';

import { useStyles } from './styles';

export function Search() {
  const { query } = useRouter();
  const { classes } = useStyles();
  const { formatMessage } = useIntl();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchActions.results.init(query));
  }, [query]);

  return (
    <>
      <Section className={classes.sticky}>
        <Section.Header>
          <Title order={2}>{formatMessage({ id: 'ui.search' })}</Title>
        </Section.Header>

        <Section.Content className={classes.form}>
          <SearchForm />
        </Section.Content>
      </Section>

      <Section>
        <Section.Content>
          <SearchResults />
        </Section.Content>
      </Section>
    </>
  );
}
