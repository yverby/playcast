import { createReducer } from '@reduxjs/toolkit';

import { podcastsActions } from 'src/store/podcasts/actions';

import type { PodcastsCache } from 'src/store/podcasts/types';

export const podcastsCacheReducer = createReducer<PodcastsCache>(
  {},
  (builder) => {
    builder.addCase(podcastsActions.details.success, (state, { payload }) => ({
      ...state,
      ...payload.data.reduce(
        (cache, podcast) => ({
          ...cache,
          [podcast.id]: { data: podcast, timestamp: new Date() },
        }),
        {}
      ),
    }));
  }
);
