import { createAction } from '@reduxjs/toolkit';

import { createRequestActions } from 'src/lib';

import type { SearchParams, SearchResults } from './types';

function withType(type: string) {
  return `SEARCH/${type}`;
}

export const searchActions = {
  params: {
    set: createAction<SearchParams>(withType('PARAMS/SET')),
  },

  results: createRequestActions<SearchParams, SearchResults>(
    withType('RESULTS'),
    ({ limit = 12, ...params }) => ({
      payload: { url: '/search', params: { ...params, limit } },
      meta: { cancelable: true },
    })
  ),
};
