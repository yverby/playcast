import { createRequestListReducer } from 'src/lib';
import { searchActions } from 'src/store/search/actions';

import type { SearchResults } from 'src/store/search/types';

export const searchResultsReducer = createRequestListReducer<SearchResults>(
  searchActions.results
);
