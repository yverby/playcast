import { combineReducers } from 'redux';

import { drawerReducer } from './drawer';
import { sidebarReducer } from './sidebar';
import { playlistReducer } from './playlist';

export const uiReducer = combineReducers({
  drawer: drawerReducer,
  sidebar: sidebarReducer,
  playlist: playlistReducer,
});
