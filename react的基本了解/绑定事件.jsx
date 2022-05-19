// react中，定义组件有两种方式  函数组件 和 类组件, react中组件名的首字母必须大写
// react中， 组件也和HTML标签一样，支持自闭合 和 双标签形式
import React from "react" // 类组件必须导入React
// 1.函数组件 
function Hello() {
  // 在函数组件中绑定事件
  const handleClick = () => {
    console.log('函数组件中的点击事件被触发了')
  }
   return <div onClick={handleClick}>this is Hello</div>
}

// 2.类组件
class HelloReact extends React.Component {
  // 在类组件中绑定事件，需要通过this来访问事件名，因为这是类，通过this访问实例
  handleClick = () => {
    console.log('类组件中的点击事件被触发了')
  }
  render(){
    return <div onClick={this.handleClick}>Hello React Component</div>
  }
}


function App() {
  return (
    <div className="app">
      <Hello></Hello>
      <Hello />
      <HelloReact></HelloReact>
      <HelloReact />
    </div>
  )
}

export default App;
