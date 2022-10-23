import create from 'zustand';

import type { DrawerState, DrawerActions } from 'src/store/ui/types';

const initialState = {
  props: {},
  name: undefined,
};

export const useDrawer = create<{ state: DrawerState; actions: DrawerActions }>(
  (set) => ({
    state: initialState,
    actions: {
      close: () => {
        set(() => ({ state: initialState }));
      },
      open: (name, props = {}) => {
        set(({ state }) => ({ state: { ...state, name, props } }));
      },
    },
  })
);
