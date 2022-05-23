import React, { Component } from 'react'

export default class ToDoHeader extends Component {
  state = {
    toDoName: '',
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.toDoName}
          onChange={this.handleChange}
          onKeyUp={this.addTodo}
        />
      </header>
    )
  }
  // 更改toDoName的值
  handleChange = (e) => {
    this.setState({
      toDoName: e.target.value
    })
  }
  // 添加todo
  addTodo = (e) => {
    if(e.keyCode === 27) {
      this.setState({
        toDoName: ''
      })
    }
    if(e.keyCode === 13) {
      if (!this.state.toDoName.trim()) return
      this.props.addTodo(this.state.toDoName)
      this.setState({
        toDoName: ''
      })
    }
  }
}
