import { combineReducers } from 'redux';

import { drawerReducer } from './drawer';
import { playerReducer } from './player';
import { sidebarReducer } from './sidebar';
import { playlistReducer } from './playlist';

export const uiReducer = combineReducers({
  drawer: drawerReducer,
  player: playerReducer,
  sidebar: sidebarReducer,
  playlist: playlistReducer,
});
