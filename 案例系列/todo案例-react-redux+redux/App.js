import React, { Component } from 'react'
import ToDoHeader from './components/ToDoHeader'
import ToDoMain from './components/ToDoMain'
import ToDoFooter from './components/ToDoFooter'

export default class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <ToDoHeader></ToDoHeader>
        <ToDoMain></ToDoMain>
        <ToDoFooter></ToDoFooter>
      </section>
    )
  }
}
