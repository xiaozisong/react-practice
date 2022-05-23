import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import { changeState, delTodo, checkAll, editTodo } from '../store/actions/index'
export default function ToDoMain() {
  const list = useSelector(state => state.todos)
  const flag = useSelector(state => state.filters)
  console.log(flag);
  let newList = []
  if (flag === 'all') {
    newList = list
  } else if(flag === 'active'){
    newList = list.filter(item => !item.flag)
  } else {
    newList = list.filter(item => item.flag)
  }
  const dispatch = useDispatch()
  const isAll = list.every(item => item.flag)
  const checkAllTodo = (e) => {
    dispatch(checkAll(e.target.checked))
  }
  const [curId, setCurId] = useState(null)
  const [curName, setCurName] = useState('')
  const iptRef = useRef(null)
  useEffect(() => {
    if(!iptRef.current) return
    iptRef.current.focus()
  }, [curId])
  const handleEdit = (e, item) => {
    if(!curName.trim()) return
    if (e.keyCode === 13) {
      dispatch(editTodo(item.id, curName))
      setCurId(null)
    }
  }
  return (
    <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" checked={isAll} onChange={checkAllTodo}/>
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {
        newList.map(item => (
          <li className={classNames({completed: item.flag, editing: item.id === curId})} key={item.id}>
            <div className="view">
              <input className="toggle" type="checkbox" checked={item.flag} onChange={() => dispatch(changeState(item.id))} />
              <label onDoubleClick={() => {
                setCurId(item.id)
                setCurName(item.name)
              }}>{item.name}</label>
              <button className="destroy" onClick={() => dispatch(delTodo(item.id))}></button>
            </div>
            <input className="edit" value={curName} ref={(val) => {
              if(item.id === curId) {
                iptRef.current = val
              }
            }}
            onChange={(e) => setCurName(e.target.value)}
            onKeyUp={(e) => handleEdit(e, item)}
            onBlur={() => setCurId(null)}
            />
          </li>
        ))
      }
    </ul>
  </section>
  )
}
