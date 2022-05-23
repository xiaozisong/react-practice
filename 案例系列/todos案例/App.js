import React, { Component } from 'react'
import ToDoHeader from './ToDoHeader'
import ToDoMain from './ToDoMain'
import ToDoFooter from './ToDoFooter'
import './styles/base.css'
import './styles/index.css'
export default class App extends Component {
  state = {
    list: [
      {id: 1, name: '吃饭', flag: false},
      {id: 2, name: '睡觉', flag: false},
      {id: 3, name: '打豆豆', flag: true},
    ],
    active: 'All'
  }
  render() {
    return (
      <section className="todoapp">
            <ToDoHeader
            addTodo={this.addTodo}
            >
            </ToDoHeader>
            <ToDoMain 
            list={this.state.list} 
            changeFlag={this.changeFlagById}
            delTodoById={this.delTodoById}
            checkAll={this.checkAll}
            editTodo={this.editTodo}
            active={this.state.active}
            ></ToDoMain>
            <ToDoFooter 
            list={this.state.list}
            clearCompleted={this.clearCompleted}
            changeList={this.changeList}
            ></ToDoFooter>
        </section>
    )
  }
  // 更改单个todo的flag状态
  changeFlagById = (id) => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return {
            ...item,
            flag: !item.flag
          }
        }else{
          return item
        }
      })
    })
  }
  // 删除单个todo
  delTodoById = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  // 添加单个Todo
  addTodo = (name) => {
    this.setState({
      list: [
        {id: +new Date(), name, flag: false},
        ...this.state.list
      ]
    })
  }
  // 全选反选
  checkAll = (flag) => {
    this.setState({
      list: this.state.list.map(item => {
          return {
            ...item,
            flag
          }
      })
    })
  }
  // 清除已完成
  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(item => !item.flag)
    })
  }
  // 编辑todo
  editTodo = (name, id) => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return {
            ...item,
            name
          }
        }else{
          return item
        }
      })
    })
  }
  // 切换显示的list列表
  changeList = (active) => {
    this.setState({
      active
    })
  }
}
