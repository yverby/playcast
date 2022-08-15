import { combineReducers } from 'redux';

import { uiReducer } from 'src/store/ui/reducer';
import { searchReducer } from 'src/store/search/reducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  search: searchReducer,
});
