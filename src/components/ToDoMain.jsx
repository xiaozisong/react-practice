import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import { changeState, delTodo } from '../store/actions/index'
export default function ToDoMain() {
  const list = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {
        list.map(item => (
          <li className={classNames({completed: item.flag})} key={item.id}>
            <div className="view">
              <input className="toggle" type="checkbox" checked={item.flag} onChange={() => dispatch(changeState(item.id))} />
              <label>{item.name}</label>
              <button className="destroy" onClick={() => dispatch(delTodo(item.id))}></button>
            </div>
            <input className="edit" value="Create a TodoMVC template" />
          </li>
        ))
      }
    </ul>
  </section>
  )
}
