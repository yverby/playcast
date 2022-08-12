import { all, call } from 'redux-saga/effects';

import { searchSaga } from 'src/store/search/saga';

export function* rootSaga() {
  yield all([call(searchSaga)]);
}
