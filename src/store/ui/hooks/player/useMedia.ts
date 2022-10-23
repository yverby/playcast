import { createRef, createElement } from 'react';
import create from 'zustand';

import type { MediaState, MediaActions, MediaElement } from './types';

const initialState: MediaState = {
  element: undefined,
  ref: { current: undefined },
};

export const useMedia = create<{ state: MediaState; actions: MediaActions }>(
  (set) => ({
    state: initialState,
    actions: {
      reset: () => {
        set(() => ({ state: initialState }));
      },
      setup: (type, attrs) => {
        set(({ state }) => {
          const ref = createRef<MediaElement>();
          const element = createElement(type, { ...attrs, ref }) as any;

          return { state: { ...state, ref, element } };
        });
      },
    },
  })
);
