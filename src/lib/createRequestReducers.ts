// @ts-nocheck
import { createReducer } from '@reduxjs/toolkit';

import type { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import type { RequestActions } from './createRequestActions';

type Override<T1, T2> = Omit<T1, keyof T2> & T2;

interface State {
  data: any;
  meta: any;
  error: any;
  succeed: boolean;
  loading: boolean;
}

export function createRequestReducer<S = Record<string, any>>(
  actions: RequestActions,
  extendReducer?: (builder: ActionReducerMapBuilder<Override<State, S>>) => void
) {
  const initState = {
    data: null,
    meta: null,
    error: null,
    succeed: false,
    loading: false,
  };

  return createReducer<Override<State, S>>(initState, (builder) => {
    builder
      .addCase(actions.request, () => ({
        ...initState,
        loading: true,
      }))
      .addCase(actions.success, (_, { payload }) => ({
        ...initState,
        ...payload,
        succeed: true,
      }))
      .addCase(actions.error, (_, { payload }) => ({
        ...initState,
        ...payload,
      }))
      .addCase(actions.clear, () => ({
        ...initState,
      }));

    if (extendReducer) {
      extendReducer(builder);
    }
  });
}

interface StateList {
  data: any[];
  meta: any;
  error: any;
  hasMore: boolean;
  succeed: boolean;
  loading: boolean;
}

export function createRequestListReducer<S = Record<string, any>>(
  actions: RequestActions,
  extendReducer?: (
    builder: ActionReducerMapBuilder<Override<StateList, S>>
  ) => void
) {
  const initState = {
    data: [],
    meta: null,
    error: null,
    hasMore: true,
    succeed: false,
    loading: false,
  };

  return createReducer<Override<StateList, S>>(initState, (builder) => {
    builder
      .addCase(actions.request, (state) => ({
        ...initState,
        ...state,
        loading: true,
      }))
      .addCase(actions.success, (state, { payload }) => ({
        ...initState,
        ...state,
        ...payload,
        succeed: true,
        loading: false,
        hasMore: !!payload.data.length,
        data: state.data.concat(payload.data),
      }))
      .addCase(actions.error, (state, { payload }) => ({
        ...initState,
        ...state,
        ...payload,
        loading: false,
      }))
      .addCase(actions.clear, () => ({
        ...initState,
      }));

    if (extendReducer) {
      extendReducer(builder);
    }
  });
}
