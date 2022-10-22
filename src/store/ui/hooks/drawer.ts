import create from 'zustand';

import { DRAWER } from 'src/constants';

interface DrawerState {
  props: object;
  name: DRAWER | undefined;
}

interface DrawerActions {
  close: () => void;
  open: (name: DRAWER | undefined, props?: object) => void;
}

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
