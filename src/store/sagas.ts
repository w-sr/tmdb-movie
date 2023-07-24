import axios, {AxiosResponse} from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {BASE_URL} from '../config';

import * as actions from './actions';
import * as slicesActions from './slices';
import {MoviesApiResponseType} from './types';
import {REACT_APP_TMDB_API_KEY} from '@env';

function* getMovies(action: ReturnType<typeof actions.getMovies>) {
  yield put(slicesActions.setIsLoading(true));

  const {
    payload: {page},
  } = action;

  try {
    const {data}: AxiosResponse<MoviesApiResponseType> = yield axios.get(
      `${BASE_URL}?api_key=${REACT_APP_TMDB_API_KEY}&page=${page}`,
    );

    yield put(slicesActions.setMovies(data));
  } catch (err) {
    yield put(slicesActions.setMovies({} as MoviesApiResponseType));
  }

  yield put(slicesActions.setIsLoading(false));
}

export function* watchCommonSaga() {
  yield takeLatest(actions.getMovies.type, getMovies);
}
