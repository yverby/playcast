import { combineReducers } from 'redux';

import { sidebarReducer } from './sidebar';

export const uiReducer = combineReducers({
  sidebar: sidebarReducer,
});
