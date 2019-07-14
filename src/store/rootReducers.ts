import { combineReducers } from 'redux';

import homeReducer from './home/reducer';

const rootReducers = combineReducers({
  home: homeReducer,
} as any);

export default rootReducers;
