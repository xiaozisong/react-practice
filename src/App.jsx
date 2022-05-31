import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from './store/actions/user'
import { changeTitle } from './store/actions/setting'
export default function App() {
  const score = useSelector(state => state.user.score)
  const title = useSelector(state => state.setting.title)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>学生分数--{score}</h1>
      <button onClick={() => dispatch(add(1))}>修改学生分数 + 1</button>
      <button onClick={() => dispatch(add(3))}>修改学生分数 + 3</button>
      <hr />
      <h1>公司标题--{title}</h1>
      <button onClick={() => dispatch(changeTitle('小标题'))}>修改公司标题</button>
    </div>
  )
}
