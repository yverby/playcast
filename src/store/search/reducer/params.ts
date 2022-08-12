import { createReducer } from '@reduxjs/toolkit';

import { searchActions } from 'src/store/search/actions';

import type { SearchParams } from 'src/store/search/types';

export const searchParamsReducer = createReducer<Partial<SearchParams>>(
  {},
  (builder) => {
    builder.addCase(searchActions.params.set, (_, { payload }) => payload);
  }
);
