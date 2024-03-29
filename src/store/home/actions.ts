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

export const getWeatherLocationsInfoEpics = createAction(
  TYPES.GET_WEATHER_LOCATIONS_INFO_EPIC,
);
export const getWeatherLocationsInfoLoading = createAction(
  TYPES.GET_WEATHER_LOCATIONS_INFO_LOADING,
);
export const getWeatherLocationsInfoSuccess = createAction(
  TYPES.GET_WEATHER_LOCATIONS_INFO_SUCCESS,
);
export const getWeatherLocationsInfoError = createAction(
  TYPES.GET_WEATHER_LOCATIONS_INFO_ERROR,
);
