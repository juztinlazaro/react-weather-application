import { GET_WEATHER_LOCATIONS_EPIC } from 'store/home/types';

export const mapDispatchToProps = (dispatch: any) => {
  return {
    getWeatherLocationsEpics: (payload: { location: string }) =>
      dispatch({
        payload,
        type: GET_WEATHER_LOCATIONS_EPIC,
      }),
  };
};
