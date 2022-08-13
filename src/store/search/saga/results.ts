import { isEqual } from 'lodash';
import { put, fork, select, takeLatest } from 'redux-saga/effects';

import { createRequestWatcher } from 'src/lib';
import { searchActions } from 'src/store/search/actions';
import { searchParamsShape } from 'src/store/search/shapes';
import { selectSearchParams } from 'src/store/search/selectors';

function* searchResultsInitSaga({
  payload: query,
}: ReturnType<typeof searchActions.results.init>) {
  const params = searchParamsShape.safeParse(query);

  if (params.success) {
    const prevParams: ReturnType<typeof selectSearchParams> = yield select(
      selectSearchParams
    );

    if (!isEqual(params.data, prevParams)) {
      yield put(searchActions.params.set(params.data));
      yield put(searchActions.results.clear());
      yield put(searchActions.results.request(params.data));
    }
  } else {
    yield put(searchActions.params.reset());
    yield put(searchActions.results.clear());
  }
}

export function* searchResultsSaga() {
  yield fork(createRequestWatcher(searchActions.results));
  yield takeLatest(searchActions.results.init, searchResultsInitSaga);
}
