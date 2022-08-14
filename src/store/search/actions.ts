import { createAction } from '@reduxjs/toolkit';

import type { ParsedUrlQuery } from 'querystring';

import { FIELD } from 'src/constants';
import { createRequestActions } from 'src/lib';

import type { SearchParams, SearchResults } from './types';

function withType(type: string) {
  return `SEARCH/${type}`;
}

export const searchActions = {
  params: {
    set: createAction<SearchParams>(withType('PARAMS/SET')),
    reset: createAction(withType('PARAMS/RESET')),
  },

  results: createRequestActions<SearchParams, SearchResults, ParsedUrlQuery>(
    withType('RESULTS'),
    (params) => ({
      payload: { url: '/search', params: { ...params, [FIELD.LIMIT]: 24 } },
      meta: { cancelable: true },
    })
  ),
};
