import React from 'react'
import { add, sub } from './store/action'
import { useSelector, useDispatch } from 'react-redux'
export default function App() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>现在的结果是{state}</h1>
      <button onClick={() => {dispatch(add(1))}}>加1</button>
      <button onClick={() => {dispatch(add(2))}}>加2</button>
      <button onClick={() => {dispatch(sub(3))}}>减3</button>
      <button onClick={() => {dispatch(sub(4))}}>减4</button>
    </div>
  )
}
