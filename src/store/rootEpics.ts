import { combineEpics } from 'redux-observable';
import {
  getWeatherLocationsEpics,
  getWeatherLocationsInfoEpics,
} from './home/epics';

const rootEpic = combineEpics<any>(
  getWeatherLocationsEpics,
  getWeatherLocationsInfoEpics,
);

export default rootEpic;
