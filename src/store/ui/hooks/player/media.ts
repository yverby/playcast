import { createRef, createElement } from 'react';
import create from 'zustand';

import type { RefObject } from 'react';

import type { MediaElement, MediaAttributes } from 'src/store/ui/types';

interface MediaState {
  element: MediaElement | undefined;
  ref: RefObject<MediaElement | undefined>;
}

interface MediaActions {
  setup: (type: 'audio' | 'video', attrs?: MediaAttributes) => void;
  reset: () => void;
}

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
