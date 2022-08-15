import { createReducer } from '@reduxjs/toolkit';

import { uiActions } from 'src/store/ui/actions';

const initialState = {
  visible: true,
};

export const sidebarReducer = createReducer(initialState, (builder) => {
  builder.addCase(uiActions.sidebar.toggle, (state, { payload }) => ({
    ...state,
    visible: payload ?? !state.visible,
  }));
});
