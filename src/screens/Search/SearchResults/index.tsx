import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Center, Loader, SimpleGrid } from '@mantine/core';

import { InfiniteList } from 'src/components/UI';
import { searchActions } from 'src/store/search/actions';
import { FIELD, ENTITY, BREAKPOINTS } from 'src/constants';
import { PodcastCard } from 'src/components/Podcast/PodcastCard';
import { EpisodeCard } from 'src/components/Episode/EpisodeCard';
import {
  selectSearchParams,
  selectSearchResutls,
} from 'src/store/search/selectors';

import type { Podcast, Episode } from 'src/store/podcasts/types';

export function SearchResults() {
  const dispatch = useDispatch();

  const params = useSelector(selectSearchParams);
  const results = useSelector(selectSearchResutls);

  const list = useMemo(() => {
    switch (params.entity) {
      case ENTITY.PODCAST: {
        return results.data.map((podcast: Podcast) => (
          <PodcastCard key={podcast.id} {...podcast} />
        ));
      }
      case ENTITY.EPISODE: {
        return results.data.map((episode: Episode) => (
          <EpisodeCard key={episode.id} {...episode} />
        ));
      }
      default: {
        return [];
      }
    }
  }, [results.data]);

  const breakpoints = BREAKPOINTS[params.entity];

  const loadMore = (offset: number) => {
    const newParams = { ...params, [FIELD.OFFSET]: offset };
    offset && dispatch(searchActions.results.request(newParams));
  };

  return (
    <Stack spacing="xs" sx={{ flex: 1 }}>
      <SimpleGrid breakpoints={breakpoints}>
        <InfiniteList
          loadMore={loadMore}
          hasMore={results.hasMore}
          loading={results.loading}
        >
          {list}
        </InfiniteList>
      </SimpleGrid>

      {results.hasMore && (
        <Center sx={{ flex: 1, minHeight: 50 }}>
          {results.loading && <Loader />}
        </Center>
      )}
    </Stack>
  );
}
