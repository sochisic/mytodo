import { combineReducers } from 'redux';
import todos from './todos';
import visiblityFilter from './visiblityFilter';

const todoApp = combineReducers({
  todos,
  visiblityFilter
})

export default todoApp;