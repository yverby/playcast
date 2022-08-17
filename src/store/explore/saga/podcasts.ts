import { fork } from 'redux-saga/effects';

import { createRequestWatcher } from 'src/lib';
import { exploreActions } from 'src/store/explore/actions';

export function* explorePodcastsSaga() {
  yield fork(createRequestWatcher(exploreActions.podcasts));
}
