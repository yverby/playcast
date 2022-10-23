import create from 'zustand';

import type { SidebarState, SidebarActions } from 'src/store/ui/types';

const initialState: SidebarState = {
  visible: true,
};

export const useSidebar = create<{
  state: SidebarState;
  actions: SidebarActions;
}>((set) => ({
  state: initialState,
  actions: {
    toggle: (payload) => {
      set(({ state }) => ({
        state: {
          ...state,
          visible: payload ?? !state.visible,
        },
      }));
    },
  },
}));
