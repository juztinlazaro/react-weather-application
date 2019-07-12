import { combineEpics } from 'redux-observable';
import { getHomeDataEpic, getWeatherLocationsEpics } from './home/epics';

const rootEpic = combineEpics<any>(getHomeDataEpic, getWeatherLocationsEpics);

export default rootEpic;
