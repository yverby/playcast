import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { TbVinyl } from 'react-icons/tb';
import { Stack, SimpleGrid } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';

import { PodcastCard } from 'src/components/Podcast';
import { EpisodeCard } from 'src/components/Episode';
import { searchActions } from 'src/store/search/actions';
import { FIELD, ENTITY, BREAKPOINTS } from 'src/constants';
import { Status, Placeholder, InfiniteList } from 'src/components/UI';
import {
  selectSearchParams,
  selectSearchResutls,
} from 'src/store/search/selectors';

import type { Podcast, Episode } from 'src/store/podcasts/types';

export function SearchResults() {
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

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

  const nothing = !results.succeed && (
    <Placeholder
      icon={TbVinyl}
      title={formatMessage({ id: 'search.searchSomething' })}
    />
  );

  return (
    <Stack spacing="xs" sx={{ flex: 1 }}>
      <Status selectors={{ ...results, data: list }} views={{ nothing }}>
        <SimpleGrid breakpoints={breakpoints}>
          <InfiniteList
            loadMore={loadMore}
            hasMore={results.hasMore}
            loading={results.loading}
          >
            {list}
          </InfiniteList>
        </SimpleGrid>
      </Status>
    </Stack>
  );
}
