import { compact } from 'lodash';
import { createReducer } from '@reduxjs/toolkit';

import { uiActions } from 'src/store/ui/actions';

import type { Episode } from 'src/store/podcasts/types';

export const playlistReducer = createReducer([] as Episode[], (builder) => {
  builder
    .addCase(uiActions.playlist.clear, () => [])
    .addCase(uiActions.playlist.next, (state, { payload }) =>
      compact([payload || state[0]]).concat(state.slice(1))
    );
});
