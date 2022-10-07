import { createAction } from '@reduxjs/toolkit';

import type { Howl } from 'howler';

import { DRAWER } from 'src/constants';

import type { Episode } from 'src/store/podcasts/types';

function withType(type: string) {
  return `UI/${type}`;
}

export const uiActions = {
  drawer: {
    open: createAction(
      withType('DRAWER/OPEN'),
      (...payload: [DRAWER, object]) => ({ payload })
    ),
    close: createAction(withType('DRAWER/CLOSE')),
  },
  sidebar: {
    toggle: createAction<boolean | undefined>(withType('SIDEBAR/TOGGLE')),
  },
  player: {
    end: createAction(withType('PLAYER/END')),
    play: createAction(withType('PLAYER/PLAY')),
    start: createAction(withType('PLAYER/START')),
    pause: createAction(withType('PLAYER/PAUSE')),
    load: createAction<Howl>(withType('PLAYER/LOAD')),
    error: createAction<Error>(withType('PLAYER/ERROR')),
  },
  playlist: {
    next: createAction<Episode | undefined>(withType('PLAYLIST/NEXT')),
  },
};
