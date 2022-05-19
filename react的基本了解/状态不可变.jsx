import React from "react"

class ChangeStateTestComponent extends React.Component {
  // react中的state是不可变的，也就是不能直接修改state的数据
  state = {
    arr: [1,2,3,4,5],
    obj: {
      name: 'xzs',
      age: 22
    }
  }
  changeStateAge = () => {
    // this.setState({
    //   arr: [...this.state.arr, 6, 7], // 使用...进行展开, 避免直接使用push，unshift，pop方法直接修改原数据
    //   obj: {...this.state.obj, gender: '男'}
    // })
    this.setState({
      arr: this.state.arr.filter(item => item !== 2) // 对数组进行删除，因为filter不会更改新数组
    })
  }
  render() {
    return (
      <>
        <ul>
          { this.state.arr.map(item => <li key={ item }> { item } </li>) }
        </ul>
        <div>
          { this.state.obj.name }
          { this.state.obj.age }
        </div>
        <div>
          {/* 点击修改state中的数组数据，进行增删 */}
          <button onClick={this.changeStateAge}>点我修改数据</button>
        </div>
      </>
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

export default App
