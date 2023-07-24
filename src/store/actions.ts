import {createAction} from '@reduxjs/toolkit';

import {GetMoviesPayload} from './types';

export const getMovies = createAction<GetMoviesPayload>('getMoviesApi');

export const clearStore = createAction('clearStore');
