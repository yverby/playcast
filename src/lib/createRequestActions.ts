import { createAction } from '@reduxjs/toolkit';

import type { AxiosRequestConfig } from 'axios';

export interface RequestPayload extends AxiosRequestConfig {
  url: string;
}

export interface RequestMeta {
  cancelable?: boolean;
}

export function createRequestActions<R = void, S = any, I = R>(
  type: string,
  prepare: (args: R) => { payload: RequestPayload; meta?: RequestMeta }
) {
  return {
    init: createAction<I>(`${type}/INIT`),
    request: createAction(`${type}/REQUEST`, prepare),
    success: createAction<S>(`${type}/SUCCESS`),
    error: createAction<any>(`${type}/ERROR`),
    clear: createAction(`${type}/CLEAR`),
    cancel: createAction(`${type}/CANCEL`),
  };
}

const actions = createRequestActions<any, any>('TYPE', () => ({
  payload: { url: '' },
}));

export type RequestActions = typeof actions;
export type RequestAction = ReturnType<typeof actions.request> & {
  meta?: RequestMeta;
};
