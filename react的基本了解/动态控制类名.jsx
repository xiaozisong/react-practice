// react中使用样式的方式有两种，一种是行内样式，另一种是类的方式
// 第二种类的方式
import './classNameTest.css'

// 第一种抽取成对象的方式
const style = {
  color: 'red',
  fontSize: '30px'
}

// 动态控制类名  通过在{}中书写表达式来控制类名
const flag = false

function App() {
  return (
    <div className="App">
      {/* 但是如果样式太多的话，写在这里就让模板显得很臃肿，我们可以将其抽离成一个对象 */}
      <span style={style}>this is span</span>
      <div className='active'>this is Div</div>
      <h1 className={ flag ? 'active' : ''}>this is H1</h1>
    </div>
  );
}

export default App;
