import { combineReducers } from 'redux';

import { explorePodcastsReducer } from './podcasts';
import { exploreEpisodesReducer } from './episodes';

export const exploreReducer = combineReducers({
  podcasts: explorePodcastsReducer,
  episodes: exploreEpisodesReducer,
});
