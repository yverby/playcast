import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { search } from 'src/store/search/requests';

import type { SearchParamsState } from 'src/store/search/types';

export function useSearchQuery(params: SearchParamsState) {
  useEffect(() => search.results.cancel, [params]);

  return useInfiniteQuery(
    ['search'],
    ({ pageParam: offset }) => search.results({ ...params, offset, limit: 24 }),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(params.term),
      getNextPageParam: (last) => !!last?.length,
    }
  );
}
