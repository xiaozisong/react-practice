import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import rootReducer from './reduces/index'
import thunk from 'redux-thunk'
export default configureStore({
  reducer: rootReducer,
}, applyMiddleware(thunk))