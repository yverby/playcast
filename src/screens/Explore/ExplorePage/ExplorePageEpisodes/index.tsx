import { useMemo, useEffect } from 'react';
import { slice } from 'lodash';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import { useDispatch, useSelector } from 'react-redux';
import {
  Title,
  Button,
  Skeleton,
  SimpleGrid,
  useMantineTheme,
} from '@mantine/core';

import { Section } from 'src/components/UI';
import { createEpisode } from 'src/lib/helpers';
import { EpisodeCard } from 'src/components/Episode';
import { exploreActions } from 'src/store/explore/actions';
import { ROUTE, ENTITY, BREAKPOINTS } from 'src/constants';
import { selectExploreEpisodes } from 'src/store/explore/selectors';

const breakpoints = BREAKPOINTS[ENTITY.EPISODE];

export function ExplorePageEpisodes() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  const episodes = useSelector(selectExploreEpisodes);

  const theme = useMantineTheme();

  const xs = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);

  useEffect(() => {
    dispatch(exploreActions.episodes.init());
  }, []);

  const list = useMemo(() => {
    const length = xs ? 5 : 6;

    if (episodes.loading) {
      return Array.from({ length }, (_, id) => createEpisode({ id }));
    }

    return slice(episodes.data, 0, length);
  }, [xs, episodes.loading]);

  const rightContent = (
    <Button size="xs" onClick={() => router.push(ROUTE.EXPLORE.EPISODES)}>
      {formatMessage({ id: 'explore.popularEpisodes' })}
    </Button>
  );

  return (
    <Section sx={{ flex: 0 }}>
      <Section.Header rightContent={rightContent}>
        <Title order={2}>{formatMessage({ id: 'explore.topEpisodes' })}</Title>
      </Section.Header>

      <Section.Content>
        <SimpleGrid breakpoints={breakpoints}>
          {list.map((episode) =>
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
