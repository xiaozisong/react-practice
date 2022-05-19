import React from "react"

class ChangeStateTestComponent extends React.Component {
  // react中分为受控组件和非受控组件
  // 创建受控组件有5步
  state = {
    // 1. 创建被state管理的数据
    msg: 'this is msg'
  }
  changeMsg = (e) => {
    console.log('我被触发了', e) // 获取事件对象e
    this.setState({
      msg: e.target.value // 将事件对象e赋值给msg
    })
  }
  render() {
    return (
      <>
        <div>
          {/* react中分为受控组件和非受控组件 */}
          {/* 2. 将state管理的数据绑定给元素的value */}
          <input type='text' value={this.state.msg} onChange={this.changeMsg}/>  {/* 3. 为元素添加change事件 */}
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
