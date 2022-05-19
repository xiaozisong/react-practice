import React from "react"

class ChangeStateTestComponent extends React.Component {
  state = {
    count: 0
  }
  // 在类组件中, 如果你不使用箭头函数来定义事件处理函数的话, 会造成this的指向问题
  constructor(){
    // 通过构造函数的方式 + bind硬绑定的方法来修改this指向
    super()
    
    this.changeStateAge = this.changeStateAge.bind(this)
  }
  changeStateAge () {
    // 这里的this指向的是undefined，但是可以修正
    console.log('这里的this指向是', this) 
  }
  render() {
    return (
      <div>
        <button onClick={this.changeStateAge}>点我查看this指向</button>
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
