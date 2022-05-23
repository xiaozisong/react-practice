import React, { Component } from 'react'

export default class ToDoFooter extends Component {
  state = {
    active: 'All'
  }
  render() {
    const { list } = this.props
    if (list.length > 0) {
      return (
        <div>
          <footer className="footer">
          <span className="todo-count"><strong>{list.filter(item => !item.flag).length}</strong> item left</span>
          <ul className="filters">
            <li>
              <a className={ this.state.active === 'All' ? 'selected' : ''} href="#/" onClick={() => this.changeState('All')}>All</a>
            </li>
            <li>
              <a className={ this.state.active === 'Active' ? 'selected' : ''} href="#/active" onClick={() => this.changeState('Active')}>Active</a>
            </li>
            <li>
              <a className={ this.state.active === 'Completed' ? 'selected' : ''} href="#/completed" onClick={() => this.changeState('Completed')}>Completed</a>
            </li>
          </ul>
          <button className="clear-completed" onClick={this.clearCompleted}>Clear completed</button>
        </footer>
        </div>
      )
    }else{
      return null
    }
  }
  // 清除全部已完成
  clearCompleted = () => {
    this.props.clearCompleted()
  }
  // 切换控制类名
  changeState = (active) => {
    this.setState({
      active
    })
    this.props.changeList(active)
  }
}
