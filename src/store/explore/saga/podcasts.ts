import { isAfter, addMilliseconds } from 'date-fns';
import { put, fork, select, takeLatest } from 'redux-saga/effects';

import { DEFAULTS } from 'src/constants';
import { createRequestWatcher } from 'src/lib';
import { exploreActions } from 'src/store/explore/actions';
import { selectExplorePodcasts } from 'src/store/explore/selectors';

const { ENTITIES } = DEFAULTS.CACHE_TIME;

function* explorePodcastsInitSaga() {
  const { timestamp }: ReturnType<typeof selectExplorePodcasts> = yield select(
    selectExplorePodcasts
  );

  if (isAfter(new Date(), addMilliseconds(timestamp || 0, ENTITIES))) {
    yield put(exploreActions.podcasts.request());
  }
}

export function* explorePodcastsSaga() {
  yield fork(createRequestWatcher(exploreActions.podcasts));
  yield takeLatest(exploreActions.podcasts.init, explorePodcastsInitSaga);
}
