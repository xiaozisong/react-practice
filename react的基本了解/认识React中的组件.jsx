// react中，定义组件有两种方式  函数组件 和 类组件, react中组件名的首字母必须大写
// react中， 组件也和HTML标签一样，支持自闭合 和 双标签形式
import React from "react" // 类组件必须导入React
// 1.函数组件 
function Hello() {
   return <div>this is Hello</div>
}

// 2.类组件
class HelloReact extends React.Component {
  render(){
    return <div>Hello React Component</div>
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
