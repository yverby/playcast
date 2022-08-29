import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Title, Button, SimpleGrid } from '@mantine/core';

import { Section } from 'src/components/UI';
import { PodcastCard } from 'src/components/Podcast';
import { exploreActions } from 'src/store/explore/actions';
import { useEntityRequest } from 'src/store/explore/hooks';
import { ROUTE, ENTITY, BREAKPOINTS } from 'src/constants';
import { selectExplorePodcasts } from 'src/store/explore/selectors';

import type { Podcast } from 'src/store/podcasts/types';

const breakpoints = BREAKPOINTS[ENTITY.PODCAST];

function generatePodcast(podcast: Partial<Podcast> | undefined) {
  const defaultPodcast: Podcast = {
    id: 0,
    name: '',
    image: {},
    genre: { id: '', name: '' },
    artist: { id: 0, name: '' },
  };

  return { ...defaultPodcast, ...podcast };
}

export function ExplorePodcasts() {
  const router = useRouter();
  const { formatMessage } = useIntl();

  const podcasts = useSelector(selectExplorePodcasts);

  useEntityRequest(exploreActions.podcasts, podcasts);

  const list = useMemo(() => {
    if (podcasts.loading) {
      return Array.from({ length: 6 }, (_, id) => generatePodcast({ id }));
    }
    return podcasts.data;
  }, [podcasts.loading]);

  return (
    <Section>
      <Section.Header
        rightContent={
          <Button size="xs" onClick={() => router.push(ROUTE.EXPLORE_PODCASTS)}>
            {formatMessage({ id: 'ui.morePodcasts' })}
          </Button>
        }
      >
        <Title order={2}>{formatMessage({ id: 'ui.popularPodcasts' })}</Title>
      </Section.Header>

      <Section.Content>
        <SimpleGrid breakpoints={breakpoints}>
          {list?.slice(0, 9).map((podcast) => (
            <PodcastCard
              {...podcast}
              key={podcast.id}
              loading={podcasts.loading}
            />
          ))}
        </SimpleGrid>
      </Section.Content>
    </Section>
  );
}
