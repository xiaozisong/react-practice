import user from "./user"
import setting from "./setting"
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
  user,
  setting
})
export default rootReducer