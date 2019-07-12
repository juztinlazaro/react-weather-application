import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
  switchMap,
  takeUntil,
  map,
  startWith,
  catchError,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { WEATHER_BASE_URL } from 'common/apiEndpoint';

import * as TYPES from './types';
import {
  getHomeDataSuccess,
  getHomeDataLoading,
  getHomeDataError,
  getWeatherLocationsSuccess,
  getWeatherLocationsError,
  getWeatherLocationsLoading,
} from './actions';

const headers = { 'Content-Type': 'application/json' };

export const getHomeDataEpic = (action$: any) =>
  action$.pipe(
    ofType(TYPES.GET_HOME_DATA_EPIC),
    switchMap(() =>
      ajax('https://jsonplaceholder.typicode.com/users').pipe(
        map(result => getHomeDataSuccess(result.response)),
        takeUntil(action$.pipe(ofType(TYPES.GET_HOME_DATA_CANCEL))),
        catchError(error => of(getHomeDataError(error))),
        startWith(getHomeDataLoading('1')),
      ),
    ),
  );

export const getWeatherLocationsEpics = (action$: any) =>
  action$.pipe(
    ofType(TYPES.GET_WEATHER_LOCATIONS_EPIC),
    switchMap((action: any) => {
      const URL = `${WEATHER_BASE_URL}/location/search/?query=${
        action.payload.location
      }`;

      return ajax.get(URL, headers).pipe(
        map(result => {
          console.log('***', result);
          return getWeatherLocationsSuccess(result.response);
        }),
        takeUntil(action$.pipe(ofType(TYPES.GET_WEATHER_LOCATIONS_CANCEL))),
        catchError(error => of(getWeatherLocationsError(error))),
        startWith(getWeatherLocationsLoading('1')),
      );
    }),
  );
