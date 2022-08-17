import { createSelector } from '@reduxjs/toolkit';

import { store } from 'src/store';

const selectExplore = (state: ReturnType<typeof store.getState>) =>
  state.explore;

export const selectExplorePodcasts = createSelector(
  selectExplore,
  (state) => state.podcasts
);

export const selectExploreEpisodes = createSelector(
  selectExplore,
  (state) => state.episodes
);
