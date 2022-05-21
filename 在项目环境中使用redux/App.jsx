import React from 'react'
import store from './store'
import { add, sub } from './store/action'
export default function App() {
  return (
    <div>
      <h1>现在的结果是{store.getState()}</h1>
      <button onClick={() => {store.dispatch(add(1))}}>加1</button>
      <button onClick={() => {store.dispatch(add(2))}}>加2</button>
      <button onClick={() => {store.dispatch(sub(3))}}>减3</button>
      <button onClick={() => {store.dispatch(sub(4))}}>减4</button>
    </div>
  )
}
