import { createReducer } from '@reduxjs/toolkit';

import { ENTITY } from 'src/constants';
import { searchActions } from 'src/store/search/actions';

import type { SearchParams } from 'src/store/search/types';

const initialState = {
  term: '',
  entity: ENTITY.PODCAST,
};

export const searchParamsReducer = createReducer<SearchParams>(
  initialState,
  (builder) => {
    builder
      .addCase(searchActions.params.set, (_, { payload }) => payload)
      .addCase(searchActions.params.reset, () => ({ ...initialState }));
  }
);
