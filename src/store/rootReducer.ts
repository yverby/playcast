import { combineReducers } from 'redux';

import { searchReducer } from 'src/store/search/reducer';
import { exploreReducer } from 'src/store/explore/reducer';
import { podcastsReducer } from 'src/store/podcasts/reducer';

export const rootReducer = combineReducers({
  search: searchReducer,
  explore: exploreReducer,
  podcasts: podcastsReducer,
});
