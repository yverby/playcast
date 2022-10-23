import create from 'zustand';

import type { StatusState, StatusActions } from './types';

const initialState: StatusState = {
  error: false,
  ready: false,
  ended: false,
  loading: false,
  playing: false,
};

export const useStatus = create<{
  state: StatusState;
  actions: StatusActions;
}>((_set) => ({
  state: initialState,
  actions: {
    set: (payload, reset) => {
      _set(({ state }) => ({
        state: {
          ...(reset ? initialState : state),
          ...payload,
        },
      }));
    },
  },
}));
