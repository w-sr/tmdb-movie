import saga from 'redux-saga';
import {all, fork} from 'redux-saga/effects';

import {configureStore} from '@reduxjs/toolkit';
import type {PreloadedState} from '@reduxjs/toolkit';

import {watchCommonSaga} from './sagas';
import RootReducer from './slices';

function* RootSaga() {
  yield all([fork(watchCommonSaga)]);
}

const sagaMiddleware = saga();

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: RootReducer,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({thunk: false, serializableCheck: false}),
      sagaMiddleware,
    ],
    preloadedState,
  });
};

const store = setupStore();

sagaMiddleware.run(RootSaga);

export type RootState = ReturnType<typeof RootReducer>;
export type AppStore = ReturnType<typeof setupStore>;

export default store;
