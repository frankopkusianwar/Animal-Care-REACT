import { combineReducers } from 'redux';
import speciesReducer  from './species'

const rootReducer = combineReducers({
  species: speciesReducer,
});

export default rootReducer;
