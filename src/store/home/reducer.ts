import { handleActions } from 'redux-actions';
import { IHomeReducer, IPayload } from './interface';

import {
  getWeatherLocationsSuccess,
  getWeatherLocationsLoading,
  getWeatherLocationsError,
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
    }),
    [onActionString(getWeatherLocationsError)]: state => ({
      ...state,
      loading: false,
    }),
  },
  Model,
);
