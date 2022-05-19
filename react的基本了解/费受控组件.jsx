import React, { createRef } from "react" // 1. 导出createRef函数

class ChangeStateTestComponent extends React.Component {
  // react中分为受控组件和非受控组件
  // 创建非受控组件有4步
  // 2. 创建空ref对象
  Msg = createRef()
  changeMsg = () => {
    console.log(this.Msg.current.value)
  }
  render() {
    return (
      <>
        <div>
          {/* 将空ref对象绑定给元素 */}
          <input type='text' ref={this.Msg} onChange={this.changeMsg}/> 
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
