import { createSelector } from '@reduxjs/toolkit';

import { store } from 'src/store';

const selectUi = (state: ReturnType<typeof store.getState>) => state.ui;

export const selectUiDrawer = createSelector(selectUi, (state) => state.drawer);

export const selectUiPlayer = createSelector(selectUi, (state) => state.player);

export const selectUiPlayerAudio = createSelector(
  selectUiPlayer,
  (state) => state.audio
);

export const selectUiPlayerStatus = createSelector(
  selectUiPlayer,
  (state) => state.status
);

export const selectUiPlaylist = createSelector(
  selectUi,
  (state) => state.playlist
);

export const selectUiSidebar = createSelector(
  selectUi,
  (state) => state.sidebar
);
