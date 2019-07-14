import { createAction } from 'redux-actions';
import * as TYPES from './types';

export const getWeatherLocationsEpics = createAction(
  TYPES.GET_WEATHER_LOCATIONS_EPIC,
);
export const getWeatherLocationsLoading = createAction(
  TYPES.GET_WEATHER_LOCATIONS_LOADING,
);
export const getWeatherLocationsSuccess = createAction(
  TYPES.GET_WEATHER_LOCATIONS_SUCCESS,
);
export const getWeatherLocationsError = createAction(
  TYPES.GET_WEATHER_LOCATIONS_ERROR,
);
