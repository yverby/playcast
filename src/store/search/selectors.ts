import { createSelector } from '@reduxjs/toolkit';

import { store } from 'src/store';

const selectSearch = (state: ReturnType<typeof store.getState>) => state.search;

export const selectSearchParams = createSelector(
  selectSearch,
  (state) => state.params
);

export const selectSearchResutls = createSelector(
  selectSearch,
  (state) => state.results
);
