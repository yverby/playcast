import { useMemo, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Title, Button, SimpleGrid } from '@mantine/core';

import { Section } from 'src/components/UI';
import { EpisodeCard } from 'src/components/Episode';
import { exploreActions } from 'src/store/explore/actions';
import { ROUTE, FIELD, ENTITY, BREAKPOINTS } from 'src/constants';
import { selectExploreEpisodes } from 'src/store/explore/selectors';

import type { Episode } from 'src/store/podcasts/types';

const breakpoints = BREAKPOINTS[ENTITY.EPISODE];

function generateEpisode(episode: Partial<Episode> | undefined) {
  const defaultEpisode: Episode = {
    name: '',
    guid: '',
    date: '',
    image: {},
    summary: '',
    content: '',
    source: { url: '', time: '' },
  };

  return { ...defaultEpisode, ...episode };
}

export function ExploreEpisodes() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  const episodes = useSelector(selectExploreEpisodes);

  useEffect(() => {
    const payload = { [FIELD.LIMIT]: 50, [FIELD.COUNTRY]: 'us' };
    dispatch(exploreActions.episodes.request(payload));

    return () => {
      dispatch(exploreActions.episodes.cancel());
    };
  }, []);

  const list = useMemo(
    () =>
      episodes.loading
        ? Array.from({ length: 6 }, (_, id) => generateEpisode({ id }))
        : episodes.data,
    [episodes.loading]
  );

  return (
    <Section>
      <Section.Header
        rightContent={
          <Button size="xs" onClick={() => router.push(ROUTE.EXPLORE_EPISODES)}>
            {formatMessage({ id: 'ui.moreEpisodes' })}
          </Button>
        }
      >
        <Title order={2}>{formatMessage({ id: 'ui.topEpisodes' })}</Title>
      </Section.Header>

      <Section.Content>
        <SimpleGrid breakpoints={breakpoints}>
          {list?.slice(0, 6).map((episode) => (
            <EpisodeCard
              {...episode}
              key={episode.id}
              loading={episodes.loading}
            />
          ))}
        </SimpleGrid>
      </Section.Content>
    </Section>
  );
}
