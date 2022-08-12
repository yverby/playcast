import { isEqual } from 'lodash';
import { put, fork, select, takeLatest } from 'redux-saga/effects';

import { createRequestWatcher } from 'src/lib';
import { searchActions } from 'src/store/search/actions';
import { selectSearchParams } from 'src/store/search/selectors';

function* searchResultsInitSaga({
  payload: params,
}: ReturnType<typeof searchActions.results.init>) {
  const prevParams: ReturnType<typeof selectSearchParams> = yield select(
    selectSearchParams
  );

  if (!isEqual(params, prevParams)) {
    yield put(searchActions.params.set(params));

    yield put(searchActions.results.clear());
    yield put(searchActions.results.request(params));
  }
}

export function* searchResultsSaga() {
  yield fork(createRequestWatcher(searchActions.results));
  yield takeLatest(searchActions.results.init, searchResultsInitSaga);
}
