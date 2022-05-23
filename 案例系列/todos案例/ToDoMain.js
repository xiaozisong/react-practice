import React, { Component } from 'react'

export default class ToDoMain extends Component {
  state = {
    isAll: false,
    currentId: '',
    currentName: ''
  }
  render() {
    const { list, active } = this.props
    let filterList = []
    if (active === 'All') {
      filterList = list
    }
    if (active === 'Active') {
      filterList = list.filter(item => !item.flag)
    }
    if (active === 'Completed') {
      filterList = list.filter(item => item.flag)
    }
    return (
      <div>
        <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" 
        checked={this.props.list.every(item => item.flag)}
        onClick={this.checkAll}
        onChange={this.handleChane}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {filterList.map(item => {
            return (
              <li 
              className={this.classnames({completed: item.flag, editing: this.state.currentId === item.id})} 
              key={item.id}
              >
              <div className="view">
                <input className="toggle" type="checkbox" 
                checked={item.flag} 
                onChange={() => this.changeFlag(item.id)} 
                />
                <label
                onDoubleClick={() => this.showEditTodo(item.id)}
                >{ item.name }</label>
                <button className="destroy" onClick={() => this.delTodo(item.id)}></button>
              </div>
              <input className="edit"
               value={this.state.currentName}
               onChange={this.editingTodo}
               onKeyUp={this.editTodo}
               onBlur={this.handleBlur}
              />
            </li>
          )
          })}
        </ul>
      </section>
      </div>
    )
  }
  classnames = obj => Object.keys(obj).filter(item => obj[item]).join(' ')
  // // 切换单个todo的状态
  changeFlag = id => this.props.changeFlag(id)
  // 删除单个todo
  delTodo = id => this.props.delTodoById(id)
  // 全选反选
  checkAll = e => this.props.checkAll(e.target.checked)
  // 根据每一项的flag计算是否全选
  handleChane = () => {
    console.log(1)
  }
  // 展示编辑todo的input
  showEditTodo = (id) => {
    this.setState({
      currentId: id,
      currentName: this.props.list.find(item => item.id === id).name
    })
  }
  // 赋值
  editingTodo = (e) => {
    this.setState({
      currentName: e.target.value
    })
  }
  // 子传父 让父组件修改todo
  editTodo = (e) => {
    if(!this.state.currentName.trim()) return
    if(e.keyCode === 13) {
      this.props.editTodo(this.state.currentName, this.state.currentId)
      this.setState({
        currentId: '',
        currentName: ''
      })
    }
  }
  // 处理失焦
  handleBlur = () => {
    this.setState({
      currentId: '',
        currentName: ''
    })
  }
}
