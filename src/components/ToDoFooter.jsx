import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCompleted, changeActive } from '../store/actions'
export default function ToDoFooter() {
  const list = useSelector(state => state.todos)
  const arr = ['all', 'active', 'completed']
  const dispatch = useDispatch()
  const unCompleted = list.filter(item => !item.flag).length
  const isShowCompleted = list.some(item => item.flag)
  const handleClearCompleted = () => {
    dispatch(clearCompleted())
  }
  const [curName, setCurName] = useState('all')

  const handleClick = (item) => {
    setCurName(item)
    dispatch(changeActive(item))
  }
  if (list.length) {
    return (
      <footer className="footer">
      <span className="todo-count">
        <strong>{ unCompleted }</strong> item left
      </span>
      <ul className="filters">
        {arr.map(item => <li key={item} onClick={() => handleClick(item)}><a className={item === curName ? 'selected' : ''} href="#/">{item}</a></li>)}
      </ul>
      { isShowCompleted && <button className="clear-completed" onClick={handleClearCompleted}>Clear completed</button> }
    </footer>
    )
  } else { 
    return null
  }
}
