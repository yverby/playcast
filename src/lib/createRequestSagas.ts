import axios, { AxiosError } from 'axios';
import {
  put,
  call,
  take,
  race,
  cancel,
  cancelled,
  takeLatest,
} from 'redux-saga/effects';

import type { RequestAction, RequestActions } from './createRequestActions';

const request = axios.create({ baseURL: '/api' });

function* requestSaga(action: RequestAction, actions: RequestActions): any {
  const { cancelable } = { ...action.meta };
  const source = axios.CancelToken.source();

  try {
    const { url, ...config } = action.payload;

    const { data } = yield call(request, url, {
      ...config,
      cancelToken: source.token,
    });

    yield put(actions.success(data));
  } catch (e) {
    const data = e instanceof AxiosError ? e.response?.data : e;

    yield put(actions.error(data));
  } finally {
    if (yield cancelled() && cancelable) {
      yield call(source.cancel);
    }
  }
}

export function createRequestWorker(actions: RequestActions) {
  return function* requestWorker(action: RequestAction): any {
    const [canceled] = yield race([
      take(actions.cancel.type),
      call(requestSaga, action, actions),
    ]);

    if (canceled) {
      yield cancel();
    }
  };
}

export function createRequestWatcher(actions: RequestActions) {
  const worker = createRequestWorker(actions);

  return function* requestWatcher() {
    yield takeLatest([actions.request], worker);
  };
}
