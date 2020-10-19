import { combineReducers } from 'redux';
import speciesReducer  from './species'
import threatsReducer from './threatsReducer'

const rootReducer = combineReducers({
  species: speciesReducer,
  threats: threatsReducer, 
});

export default rootReducer;
