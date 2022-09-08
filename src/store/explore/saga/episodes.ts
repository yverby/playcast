import { isAfter, addMilliseconds } from 'date-fns';
import { put, fork, select, takeLatest } from 'redux-saga/effects';

import { DEFAULTS } from 'src/constants';
import { createRequestWatcher } from 'src/lib';
import { exploreActions } from 'src/store/explore/actions';
import { selectExploreEpisodes } from 'src/store/explore/selectors';

const { ENTITIES } = DEFAULTS.CACHE;

function* exploreEpisodesInitSaga() {
  const { timestamp }: ReturnType<typeof selectExploreEpisodes> = yield select(
    selectExploreEpisodes
  );

  if (isAfter(new Date(), addMilliseconds(timestamp || 0, ENTITIES))) {
    yield put(exploreActions.episodes.request());
  }
}

export function* exploreEpisodesSaga() {
  yield fork(createRequestWatcher(exploreActions.episodes));
  yield takeLatest(exploreActions.episodes.init, exploreEpisodesInitSaga);
}
