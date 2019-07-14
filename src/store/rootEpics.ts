import { combineEpics } from 'redux-observable';
import { getWeatherLocationsEpics } from './home/epics';

const rootEpic = combineEpics<any>(getWeatherLocationsEpics);

export default rootEpic;
