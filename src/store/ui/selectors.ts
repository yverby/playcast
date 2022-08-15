import { createSelector } from '@reduxjs/toolkit';

import { store } from 'src/store';

const selectUi = (state: ReturnType<typeof store.getState>) => state.ui;

export const selectUiSidebar = createSelector(
  selectUi,
  (state) => state.sidebar
);
