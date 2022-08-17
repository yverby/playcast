import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { SimpleGrid, Title } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';

import { Section } from 'src/components/UI';
import { FIELD, ENTITY, BREAKPOINTS } from 'src/constants';
import { exploreActions } from 'src/store/explore/actions';
import { PodcastCard } from 'src/components/Podcast/PodcastCard';
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
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  const podcasts = useSelector(selectExplorePodcasts);

  useEffect(() => {
    const payload = { [FIELD.LIMIT]: 24, [FIELD.COUNTRY]: 'us' };
    dispatch(exploreActions.podcasts.request(payload));

    return () => {
      dispatch(exploreActions.podcasts.cancel());
    };
  }, []);

  const list = podcasts.loading
    ? [...Array(9)].map((_, id) => generatePodcast({ id }))
    : podcasts.data;

  return (
    <Section>
      <Section.Header>
        <Title order={2}>{formatMessage({ id: 'ui.topPodcasts' })}</Title>
      </Section.Header>

      <Section.Content>
        <SimpleGrid breakpoints={breakpoints}>
          {list?.slice(0, 9).map((podcast, index) => (
            <PodcastCard {...podcast} key={index} loading={podcasts.loading} />
          ))}
        </SimpleGrid>
      </Section.Content>
    </Section>
  );
}
