import create from 'zustand';

interface SidebarState {
  visible: boolean;
}

interface SidebarActions {
  toggle: (payload?: boolean) => void;
}

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
