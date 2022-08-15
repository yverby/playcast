import { createAction } from '@reduxjs/toolkit';

function withType(type: string) {
  return `SIDEBAR/${type}`;
}

export const uiActions = {
  sidebar: {
    toggle: createAction<boolean | undefined>(withType('SIDEBAR/TOGGLE')),
  },
};
