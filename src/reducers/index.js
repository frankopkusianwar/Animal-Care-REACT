import { combineReducers } from 'redux';
import speciesReducer from './species';
import threatsReducer from './threatsReducer';
import filter from './filter';

const rootReducer = combineReducers({
  species: speciesReducer,
  threats: threatsReducer,
  filter,
});

export default rootReducer;
