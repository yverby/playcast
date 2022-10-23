import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { TbVinyl } from 'react-icons/tb';
import { Stack, SimpleGrid } from '@mantine/core';

import { ENTITY, BREAKPOINTS } from 'src/constants';
import { PodcastCard } from 'src/components/Podcast';
import { EpisodeCard } from 'src/components/Episode';
import { Status, Placeholder, InfiniteList } from 'src/components/UI';
import { useSearchQuery, useSearchParams } from 'src/store/search/hooks';

import type { Podcast, Episode } from 'src/store/podcasts/types';

export function SearchResults() {
  const { formatMessage } = useIntl();

  const params = useSearchParams(({ state }) => state);
  const results = useSearchQuery(params);

  const list = useMemo(() => {
    const entities = results.data?.pages.flat() || [];

    switch (params.entity) {
      case ENTITY.PODCAST: {
        return entities.map((podcast: Podcast) => (
          <PodcastCard key={podcast.id} {...podcast} />
        ));
      }
      case ENTITY.EPISODE: {
        return entities.map((episode: Episode) => (
          <EpisodeCard key={episode.id} {...episode} />
        ));
      }
      default: {
        return [];
      }
    }
  }, [results.data?.pages]);

  const breakpoints = useMemo(
    () => BREAKPOINTS[params.entity],
    [results.data?.pages]
  );

  const loadMore = (offset: number) => {
    offset && results.fetchNextPage({ pageParam: offset });
  };

  const nothing = !results.isSuccess && (
    <Placeholder
      icon={TbVinyl}
      title={formatMessage({ id: 'search.searchSomething' })}
    />
  );

  return (
    <Stack spacing="xs" sx={{ flex: 1 }}>
      <Status views={{ nothing }} selectors={{ ...results, data: list }}>
        <SimpleGrid breakpoints={breakpoints}>
          <InfiniteList
            loadMore={loadMore}
            hasMore={results.hasNextPage}
            loading={results.isFetchingNextPage}
          >
            {list}
          </InfiniteList>
        </SimpleGrid>
      </Status>
    </Stack>
  );
}
