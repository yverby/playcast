import { useEffect } from 'react';
import Head from 'next/head';
import { useIntl } from 'react-intl';
import { Title } from '@mantine/core';
import { useRouter } from 'next/router';

import { BRAND } from 'src/constants';
import { Section } from 'src/components/UI';
import { useSearchParams } from 'src/store/search/hooks';

import { SearchForm } from './SearchForm';
import { SearchResults } from './SearchResults';

import { useStyles } from './styles';

export function Search() {
  const { query } = useRouter();
  const { classes } = useStyles();
  const { formatMessage } = useIntl();

  const params = useSearchParams(({ actions }) => actions);

  useEffect(() => {
    params.set(query as any);
  }, [query]);

  return (
    <>
      <Head>
        <title>
          {formatMessage({ id: 'ui.search' })} / {BRAND.NAME}
        </title>
      </Head>

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
