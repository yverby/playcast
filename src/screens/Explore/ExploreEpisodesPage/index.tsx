import { useMemo, useEffect } from 'react';
import Head from 'next/head';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { get, keys, groupBy } from 'lodash';
import { Title, SimpleGrid } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';

import type { ReactNode } from 'react';

import { Status, Section } from 'src/components/UI';
import { EpisodeCard } from 'src/components/Episode';
import { ExploreForm } from 'src/components/Explore';
import { exploreActions } from 'src/store/explore/actions';
import { selectExploreEpisodes } from 'src/store/explore/selectors';
import { BRAND, FIELD, ROUTE, ENTITY, BREAKPOINTS } from 'src/constants';

import type { ExploreFormValues } from 'src/store/explore/types';

import { useStyles } from './styles';

const breakpoints = BREAKPOINTS[ENTITY.EPISODE];

export function ExploreEpisodesPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const { formatMessage } = useIntl();

  const episodes = useSelector(selectExploreEpisodes);

  useEffect(() => {
    dispatch(exploreActions.episodes.init());
  }, []);

  const list = useMemo(
    () => groupBy(episodes.data, ({ genre }) => genre?.id),
    [episodes.data]
  );

  const values = useMemo(
    () => ({ [FIELD.GENRE]: [get(router.query, FIELD.GENRE, [])].flat() }),
    [router.query]
  );

  const genres = useMemo(() => keys(list), [list]);

  const onSubmit = (query: ExploreFormValues) => {
    router.replace({ pathname: ROUTE.EXPLORE.EPISODES, query });
  };

  return (
    <>
      <Head>
        <title>
          {formatMessage({ id: 'explore.popularEpisodes' })} / {BRAND.NAME}
        </title>
      </Head>

      <Section className={classes.sticky}>
        <Section.Header>
          <Title order={2}>
            {formatMessage({ id: 'explore.popularEpisodes' })}
          </Title>
        </Section.Header>

        {episodes.data && (
          <Section.Content className={classes.form}>
            <ExploreForm
              values={values}
              onSubmit={onSubmit}
              genres={episodes.genres}
            />
          </Section.Content>
        )}
      </Section>

      <Section>
        <Section.Content>
          <Status selectors={episodes}>
            <SimpleGrid breakpoints={breakpoints}>
              {[get(router.query, FIELD.GENRE, genres)]
                .flat()
                .reduce<ReactNode[]>(
                  (cards, id) =>
                    cards.concat(
                      get(list, id, []).map((episode) => (
                        <EpisodeCard {...episode} key={episode.id} />
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
