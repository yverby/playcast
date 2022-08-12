import { all, call } from 'redux-saga/effects';

import { searchResultsSaga } from './results';

export function* searchSaga() {
  yield all([call(searchResultsSaga)]);
}
