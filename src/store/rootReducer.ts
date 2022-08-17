import { combineReducers } from 'redux';

import { uiReducer } from 'src/store/ui/reducer';
import { searchReducer } from 'src/store/search/reducer';
import { exploreReducer } from 'src/store/explore/reducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  search: searchReducer,
  explore: exploreReducer,
});
