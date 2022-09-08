import { createReducer } from '@reduxjs/toolkit';

import { uiActions } from 'src/store/ui/actions';

import type { DrawerParams } from 'src/store/ui/types';

const initialState: DrawerParams = {
  name: undefined,
  props: {},
};

export const drawerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(
      uiActions.drawer.open,
      (state, { payload: [name, props = {}] }) => ({ ...state, name, props })
    )
    .addCase(uiActions.drawer.close, () => ({ ...initialState }));
});
