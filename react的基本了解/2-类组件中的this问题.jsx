import React from "react"

class ChangeStateTestComponent extends React.Component {

  // 在类组件中, 如果你不使用箭头函数来定义事件处理函数的话, 会造成this的指向问题
  // 1. 除了使用constructor + bind方法，还可以使用 箭头函数的方式，将事件处理函数作为箭头函数的返回值
  changeStateAge () {
    // 这里的this指向的是undefined，但是可以修正
    console.log('这里的this指向是', this) 
  }
  render() {
    return (
      <div>
        {/* 因为箭头函数是没有this指向的，它的this默认绑定为父级作用域的this */}
        <button onClick={() => this.changeStateAge()}>点我查看this指向</button>
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

export default App
