// react中，如果想通过事件处理函数来修改数据怎么办呢？
import React from "react";

class ChangeStateTestComponent extends React.Component {
  state = {
    count: 0
  }
  changeStateAge = () => {
    this.setState({
      count: this.state.count+1 // 在react中，是不能直接修改state中的数据的，必须经过setState来修改
    })
  }
  render() {
    return (
      <div>
        <span>现在的count的值为：{ this.state.count }</span>
        <button onClick={this.changeStateAge}>点我修改count</button>
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
