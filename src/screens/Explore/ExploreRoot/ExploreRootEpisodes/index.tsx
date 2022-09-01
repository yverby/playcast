import { useMemo, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Title, Button, Skeleton, SimpleGrid } from '@mantine/core';

import { Section } from 'src/components/UI';
import { EpisodeCard } from 'src/components/Episode';
import { exploreActions } from 'src/store/explore/actions';
import { ROUTE, ENTITY, BREAKPOINTS } from 'src/constants';
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

export function ExploreRootEpisodes() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  const episodes = useSelector(selectExploreEpisodes);

  useEffect(() => {
    dispatch(exploreActions.episodes.init());
  }, []);

  const list = useMemo(() => {
    if (episodes.loading) {
      return Array.from({ length: 6 }, (_, id) => generateEpisode({ id }));
    }
    return episodes.data;
  }, [episodes.loading]);

  return (
    <Section>
      <Section.Header
        rightContent={
          <Button size="xs" onClick={() => router.push(ROUTE.EXPLORE.EPISODES)}>
            {formatMessage({ id: 'ui.moreEpisodes' })}
          </Button>
        }
      >
        <Title order={2}>{formatMessage({ id: 'ui.popularEpisodes' })}</Title>
      </Section.Header>

      <Section.Content>
        <SimpleGrid breakpoints={breakpoints}>
          {list?.slice(0, 6).map((episode) =>
            !episodes.loading ? (
              <EpisodeCard {...episode} key={episode.id} />
            ) : (
              <Skeleton radius={14} key={episode.id}>
                <EpisodeCard {...episode} />
              </Skeleton>
            )
          )}
        </SimpleGrid>
      </Section.Content>
    </Section>
  );
}
