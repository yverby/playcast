import { createAction } from '@reduxjs/toolkit';

import { DRAWER } from 'src/constants';

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
};
