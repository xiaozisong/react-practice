// react中，如果想通过事件处理函数来修改数据怎么办呢？
import React from "react";
// 定义一个组件

class ChangeStateTestComponent extends React.Component {
  state = {
    name: 'xzs',
    age: '21'
  }
  changeStateAge = () => {
    // 在组件中，是不能直接修改state的，需要通过setState进行修改
    this.setState({
      age: '22'
    })
  }
  render() {
    return (
      <div>
        <span>我的名字叫{ this.state.name }</span>
        <span>我今年{ this.state.age }岁了</span>
        <button onClick={this.changeStateAge}>点我修改年龄</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="app">
      <ChangeStateTestComponent />
    </div>
  )
}

export default App;
