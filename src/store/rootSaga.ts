import { all, call } from 'redux-saga/effects';

import { searchSaga } from 'src/store/search/saga';
import { exploreSaga } from 'src/store/explore/saga';

export function* rootSaga() {
  yield all([call(searchSaga), call(exploreSaga)]);
}
