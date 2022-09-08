import { isAfter, addMilliseconds } from 'date-fns';
import { put, fork, select, takeLatest } from 'redux-saga/effects';

import { DEFAULTS } from 'src/constants';
import { createRequestWatcher } from 'src/lib';
import { podcastsActions } from 'src/store/podcasts/actions';
import { selectPodcastsCache } from 'src/store/podcasts/selectors';

const { PODCASTS } = DEFAULTS.CACHE;

function* podcastsDetailsInitSaga({
  payload,
}: ReturnType<typeof podcastsActions.details.init>) {
  const cache: ReturnType<typeof selectPodcastsCache> = yield select(
    selectPodcastsCache
  );

  const id = payload.id.filter((podcastId) => {
    const { timestamp } = { ...cache[podcastId] };
    return isAfter(new Date(), addMilliseconds(timestamp || 0, PODCASTS));
  });

  if (id.length) {
    yield put(podcastsActions.details.request({ id }));
  }
}

export function* podcastsDetailsSaga() {
  yield fork(createRequestWatcher(podcastsActions.details));
  yield takeLatest(podcastsActions.details.init, podcastsDetailsInitSaga);
}
