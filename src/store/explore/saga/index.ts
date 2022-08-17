import { all, call } from 'redux-saga/effects';

import { explorePodcastsSaga } from './podcasts';
import { exploreEpisodesSaga } from './episodes';

export function* exploreSaga() {
  yield all([call(explorePodcastsSaga), call(exploreEpisodesSaga)]);
}
