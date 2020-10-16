import { combineReducers } from 'redux';
import { dogReducer } from './dogs'

const rootReducer = combineReducers({
  dogs: dogReducer,
});

export default rootReducer;
