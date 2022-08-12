import { combineReducers } from 'redux';

import { searchParamsReducer } from './params';
import { searchResultsReducer } from './results';

export const searchReducer = combineReducers({
  params: searchParamsReducer,
  results: searchResultsReducer,
});
