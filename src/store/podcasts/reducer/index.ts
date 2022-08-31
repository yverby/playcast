import { combineReducers } from 'redux';

import { podcastsCacheReducer } from './cache';
import { podcastsDetailsReducer } from './details';

export const podcastsReducer = combineReducers({
  cache: podcastsCacheReducer,
  details: podcastsDetailsReducer,
});
