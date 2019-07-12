import { createAction } from 'redux-actions';
import * as TYPES from './types';

export const getHomeDataEpics = createAction(TYPES.GET_HOME_DATA_EPIC);
export const getHomeDataLoading = createAction(TYPES.GET_HOME_DATA_LOADING);
export const getHomeDataSuccess = createAction(TYPES.GET_HOME_DATA_SUCCESS);
export const getHomeDataError = createAction(TYPES.GET_HOME_DATA_ERROR);

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
