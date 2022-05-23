import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reduces/index'
export default configureStore({
  reducer: rootReducer
})