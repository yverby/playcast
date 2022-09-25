import { useMemo, useEffect } from 'react';
import Head from 'next/head';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { get, keys, groupBy } from 'lodash';
import { Title, SimpleGrid } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';

import type { ReactNode } from 'react';

import { Status, Section } from 'src/components/UI';
import { PodcastCard } from 'src/components/Podcast';
import { ExploreForm } from 'src/components/Explore';
import { exploreActions } from 'src/store/explore/actions';
import { selectExplorePodcasts } from 'src/store/explore/selectors';
import { BRAND, FIELD, ROUTE, ENTITY, BREAKPOINTS } from 'src/constants';

import type { ExploreFormValues } from 'src/store/explore/types';

import { useStyles } from './styles';

const breakpoints = BREAKPOINTS[ENTITY.PODCAST];

export function ExplorePodcastsPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const { formatMessage } = useIntl();

  const podcasts = useSelector(selectExplorePodcasts);

  useEffect(() => {
    dispatch(exploreActions.podcasts.init());
  }, []);

  const list = useMemo(
    () => groupBy(podcasts.data, ({ genre }) => genre?.id),
    [podcasts.data]
  );

  const values = useMemo(
    () => ({ [FIELD.GENRE]: [get(router.query, FIELD.GENRE, [])].flat() }),
    [router.query]
  );

  const genres = useMemo(() => keys(list), [list]);

  const onSubmit = (query: ExploreFormValues) => {
    router.replace({ pathname: ROUTE.EXPLORE.PODCASTS, query });
  };

  return (
    <>
      <Head>
        <title>
          {formatMessage({ id: 'explore.popularPodcasts' })} / {BRAND.NAME}
        </title>
      </Head>

      <Section className={classes.sticky}>
        <Section.Header>
          <Title order={2}>
            {formatMessage({ id: 'explore.popularPodcasts' })}
          </Title>
        </Section.Header>

        {podcasts.data && (
          <Section.Content className={classes.form}>
            <ExploreForm
              values={values}
              onSubmit={onSubmit}
              genres={podcasts.genres}
            />
          </Section.Content>
        )}
      </Section>

      <Section>
        <Section.Content>
          <Status selectors={podcasts}>
            <SimpleGrid breakpoints={breakpoints}>
              {[get(router.query, FIELD.GENRE, genres)]
                .flat()
                .reduce<ReactNode[]>(
                  (cards, id) =>
                    cards.concat(
                      get(list, id, []).map((podcast) => (
                        <PodcastCard {...podcast} key={podcast.id} />
                      ))
                    ),
                  []
                )}
            </SimpleGrid>
          </Status>
        </Section.Content>
      </Section>
    </>
  );
}
