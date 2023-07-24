import {PayloadAction, combineReducers, createSlice} from '@reduxjs/toolkit';

import {MoviesApiResponseType} from './types';

const movies = createSlice({
  name: 'getMovies',
  initialState: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  } as MoviesApiResponseType,
  reducers: {
    setMovies: (_, {payload}: PayloadAction<MoviesApiResponseType>) => payload,
  },
});

const isLoading = createSlice({
  name: 'isLoading',
  initialState: false,
  reducers: {
    setIsLoading: (_, {payload}: PayloadAction<boolean>) => payload,
  },
});

export const {setMovies} = movies.actions;
export const {setIsLoading} = isLoading.actions;

export default combineReducers({
  movies: movies.reducer,
  isLoading: isLoading.reducer,
});
