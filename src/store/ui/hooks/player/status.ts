import create from 'zustand';

interface StatusState {
  error: boolean;
  ready: boolean;
  ended: boolean;
  loading: boolean;
  playing: boolean;
}

interface StatusActions {
  set: (status: Partial<StatusState>, reset?: boolean) => void;
}

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
