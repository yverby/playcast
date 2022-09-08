import { combineReducers } from 'redux';

import { drawerReducer } from './drawer';
import { sidebarReducer } from './sidebar';

export const uiReducer = combineReducers({
  drawer: drawerReducer,
  sidebar: sidebarReducer,
});
