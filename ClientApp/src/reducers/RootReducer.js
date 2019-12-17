import * as Redux from 'redux';

import { InfobarReducer } from './InfobarReducer'
import { MapReducer } from './MapReducer'

export const rootReducer = Redux.combineReducers({
  infobarReducer: InfobarReducer,
  mapReducer: MapReducer
});