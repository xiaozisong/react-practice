import { combineReducers } from 'redux'
import todos from './todo'
import filters from './filters'
export default combineReducers({
  todos,
  filters
})