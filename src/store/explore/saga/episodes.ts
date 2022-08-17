import { fork } from 'redux-saga/effects';

import { createRequestWatcher } from 'src/lib';
import { exploreActions } from 'src/store/explore/actions';

export function* exploreEpisodesSaga() {
  yield fork(createRequestWatcher(exploreActions.episodes));
}
