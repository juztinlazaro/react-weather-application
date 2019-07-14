import {
  GET_WEATHER_LOCATIONS_EPIC,
  GET_WEATHER_LOCATIONS_INFO_EPIC,
} from 'store/home/types';
import { IHomeReducer } from 'store/home/interface';

interface IMapStateToProps {
  home: IHomeReducer;
}

export const mapStateToProps = (state: IMapStateToProps) => {
  return {
    hasError: state.home.error,
    isLoading: state.home.loading,
    location: state.home.location,
    locations: state.home.locations,
  };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    getWeatherLocationsEpics: (payload: { location: string }) =>
      dispatch({
        payload,
        type: GET_WEATHER_LOCATIONS_EPIC,
      }),
    getWeatherLocationsInfoEpics: (payload: { woeid: string }) =>
      dispatch({
        payload,
        type: GET_WEATHER_LOCATIONS_INFO_EPIC,
      }),
  };
};
