// @ts-nocheck
import { createReducer } from '@reduxjs/toolkit';

import type { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import type { RequestActions } from './createRequestActions';

type Override<T1, T2> = Omit<T1, keyof T2> & T2;

interface DefaultState {
  data: any;
  meta: any;
  error: any;
  succeed: boolean;
  loading: boolean;
  timestamp: Date | null;
}

export function createRequestReducer<S = Record<string, any>>(
  actions: RequestActions,
  extendReducer?: (
    builder: ActionReducerMapBuilder<Override<DefaultState, S>>
  ) => void
) {
  const initState: DefaultState = {
    data: null,
    meta: null,
    error: null,
    succeed: false,
    loading: false,
    timestamo: null,
  };

  return createReducer<Override<DefaultState, S>>(initState, (builder) => {
    builder
      .addCase(actions.request, () => ({
        ...initState,
        loading: true,
      }))
      .addCase(actions.success, (_, { payload }) => ({
        ...initState,
        ...payload,
        succeed: true,
        timestamp: new Date(),
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

interface DefaultListState {
  data: any[];
  meta: any;
  error: any;
  hasMore: boolean;
  succeed: boolean;
  loading: boolean;
  timestamp: Date | null;
}

export function createRequestListReducer<S = Record<string, any>>(
  actions: RequestActions,
  extendReducer?: (
    builder: ActionReducerMapBuilder<Override<DefaultListState, S>>
  ) => void
) {
  const initState: DefaultListState = {
    data: [],
    meta: null,
    error: null,
    hasMore: true,
    succeed: false,
    loading: false,
    timestamp: null,
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
        timestamp: new Date(),
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
