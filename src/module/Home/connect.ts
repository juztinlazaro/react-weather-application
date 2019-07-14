import { GET_WEATHER_LOCATIONS_EPIC } from 'store/home/types';
import { IHomeReducer } from 'store/home/interface';

interface IMapStateToProps {
  home: IHomeReducer;
}

export const mapStateToProps = (state: IMapStateToProps) => {
  return {
    isLoading: state.home.loading,
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
  };
};
