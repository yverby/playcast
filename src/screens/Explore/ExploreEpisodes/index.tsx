import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { SimpleGrid, Title } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';

import { Section } from 'src/components/UI';
import { FIELD, ENTITY, BREAKPOINTS } from 'src/constants';
import { exploreActions } from 'src/store/explore/actions';
import { EpisodeCard } from 'src/components/Episode/EpisodeCard';
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
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  const episodes = useSelector(selectExploreEpisodes);

  useEffect(() => {
    const payload = { [FIELD.LIMIT]: 24, [FIELD.COUNTRY]: 'us' };
    dispatch(exploreActions.episodes.request(payload));

    return () => {
      dispatch(exploreActions.episodes.cancel());
    };
  }, []);

  const list = episodes.loading
    ? [...Array(6)].map((_, id) => generateEpisode({ id }))
    : episodes.data;

  return (
    <Section>
      <Section.Header>
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
