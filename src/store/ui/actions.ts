import { createAction } from '@reduxjs/toolkit';

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
  playlist: {
    clear: createAction(withType('PLAYLIST/CLEAR')),
    next: createAction<Episode | undefined>(withType('PLAYLIST/NEXT')),
  },
};
