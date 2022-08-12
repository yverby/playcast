import { combineReducers } from 'redux';

import { searchReducer } from 'src/store/search/reducer';

export const rootReducer = combineReducers({ search: searchReducer });
