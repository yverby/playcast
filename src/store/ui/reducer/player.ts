import { createReducer } from '@reduxjs/toolkit';

import { uiActions } from 'src/store/ui/actions';

import type { Player } from 'src/store/ui/types';

const initialState: Player = {
  audio: null,
  error: null,
  status: {
    ended: true,
    ready: false,
    loading: false,
    playing: false,
  },
};

export const playerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(uiActions.player.start, () => ({
      ...initialState,
      status: { ...initialState.status, loading: true },
    }))
    .addCase(uiActions.player.load, (_, { payload }) => ({
      ...initialState,
      audio: payload,
      status: { ...initialState.status, ready: true },
    }))
    .addCase(uiActions.player.play, (state) => ({
      ...state,
      status: { ...state.status, playing: true },
    }))
    .addCase(uiActions.player.pause, (state) => ({
      ...state,
      status: { ...state.status, playing: false },
    }))
    .addCase(uiActions.player.end, () => ({
      ...initialState,
      status: { ...initialState.status, ended: true, playing: false },
    }))
    .addCase(uiActions.player.error, (_, { payload }) => ({
      ...initialState,
      error: payload,
    }));
});
