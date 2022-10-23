import create from 'zustand';

import type { PlaylistState, PlaylistActions } from 'src/store/ui/types';

const initialState: PlaylistState = {
  queue: [],
};

export const usePlaylist = create<{
  state: PlaylistState;
  actions: PlaylistActions;
}>((set) => ({
  state: initialState,
  actions: {
    add: (episode) => {
      set(({ state }) => ({
        state: {
          ...state,
          queue: state.queue.concat(episode),
        },
      }));
    },
    next: (episode) => {
      set(({ state }) => ({
        state: {
          ...state,
          queue: !episode
            ? state.queue.slice(1)
            : [
                episode,
                ...state.queue.filter(({ guid }) => guid !== episode.guid),
              ],
        },
      }));
    },
    clear: () => {
      set(() => ({ state: initialState }));
    },
  },
}));
