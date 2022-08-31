import { all, call } from 'redux-saga/effects';

import { searchSaga } from 'src/store/search/saga';
import { exploreSaga } from 'src/store/explore/saga';
import { podcastsSaga } from 'src/store/podcasts/saga';

export function* rootSaga() {
  yield all([call(searchSaga), call(exploreSaga), call(podcastsSaga)]);
}
