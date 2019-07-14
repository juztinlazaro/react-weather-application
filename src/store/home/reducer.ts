import { handleActions } from 'redux-actions';
import { IHomeReducer, IPayload } from './interface';

import {
  getWeatherLocationsSuccess,
  getWeatherLocationsLoading,
  getWeatherLocationsError,
  getWeatherLocationsInfoSuccess,
  getWeatherLocationsInfoLoading,
  getWeatherLocationsInfoError,
} from './actions';
import Model from './model';

const onActionString = (action: any) => {
  return action.toString();
};

export default handleActions<IHomeReducer, IPayload>(
  {
    [onActionString(getWeatherLocationsSuccess)]: (
      state,
      action: IPayload,
    ) => ({
      ...state,
      loading: false,
      locations: action.payload,
    }),
    [onActionString(getWeatherLocationsLoading)]: state => ({
      ...state,
      loading: true,
      error: false,
    }),
    [onActionString(getWeatherLocationsError)]: state => ({
      ...state,
      loading: false,
      error: true,
    }),
    [onActionString(getWeatherLocationsInfoSuccess)]: (
      state,
      action: IPayload,
    ) => ({
      ...state,
      loading: false,
      location: action.payload,
    }),
    [onActionString(getWeatherLocationsInfoLoading)]: state => ({
      ...state,
      loading: true,
      error: false,
    }),
    [onActionString(getWeatherLocationsInfoError)]: state => ({
      ...state,
      loading: false,
      error: true,
    }),
  },
  Model,
);
