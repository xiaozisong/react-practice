import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/actions'
export default function ToDoHeader() {
  const [todo, setTodo] = useState('')
 
  const dispatch = useDispatch()
  const addTodos = (e) => {
    if(!e.target.value.trim()) return
    if(e.keyCode === 27) setTodo('')
    if (e.keyCode === 13) {
      dispatch(addTodo(todo))
      setTodo('')
    }
  }
  return (
    <header className="header">
    <h1>todos</h1>
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      onKeyUp={addTodos}
    />
  </header>
  )
}
