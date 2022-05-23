import { combineReducers } from 'redux'
import channel from './channel'
import news from './news'
export default combineReducers({
  channel,
  news
})