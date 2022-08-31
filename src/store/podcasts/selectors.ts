import { createSelector } from '@reduxjs/toolkit';

import { store } from 'src/store';

const selectPodcasts = (state: ReturnType<typeof store.getState>) =>
  state.podcasts;

export const selectPodcastsCache = createSelector(
  selectPodcasts,
  (state) => state.cache
);

export const selectPodcastsDetails = createSelector(
  selectPodcasts,
  (state) => state.details
);
