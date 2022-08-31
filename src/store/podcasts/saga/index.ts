import { all, call } from 'redux-saga/effects';

import { podcastsDetailsSaga } from './details';

export function* podcastsSaga() {
  yield all([call(podcastsDetailsSaga)]);
}
