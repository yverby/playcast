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
import { createPodcast } from 'src/lib/helpers';
import { PodcastCard } from 'src/components/Podcast';
import { exploreActions } from 'src/store/explore/actions';
import { ROUTE, ENTITY, BREAKPOINTS } from 'src/constants';
import { selectExplorePodcasts } from 'src/store/explore/selectors';

const breakpoints = BREAKPOINTS[ENTITY.PODCAST];

export function ExplorePagePodcasts() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  const podcasts = useSelector(selectExplorePodcasts);

  const theme = useMantineTheme();

  const xs = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);

  useEffect(() => {
    dispatch(exploreActions.podcasts.init());
  }, []);

  const list = useMemo(() => {
    const length = xs ? 6 : 9;

    if (podcasts.loading) {
      return Array.from({ length }, (_, id) => createPodcast({ id }));
    }

    return slice(podcasts.data, 0, length);
  }, [xs, podcasts.loading]);

  const rightContent = (
    <Button size="xs" onClick={() => router.push(ROUTE.EXPLORE.PODCASTS)}>
      {formatMessage({ id: 'explore.popularPodcasts' })}
    </Button>
  );

  return (
    <Section sx={{ flex: 0 }}>
      <Section.Header rightContent={rightContent}>
        <Title order={2}>{formatMessage({ id: 'explore.topPodcasts' })}</Title>
      </Section.Header>

      <Section.Content>
        <SimpleGrid breakpoints={breakpoints}>
          {list.map((podcast) =>
            !podcasts.loading ? (
              <PodcastCard {...podcast} key={podcast.id} />
            ) : (
              <Skeleton radius={14} key={podcast.id}>
                <PodcastCard {...podcast} />
              </Skeleton>
            )
          )}
        </SimpleGrid>
      </Section.Content>
    </Section>
  );
}
