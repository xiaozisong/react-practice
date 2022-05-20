import { useState } from 'react' 
export default function App () {
  // 如果数据是复杂数据类型呢？
  // 复杂数据类型存放的不是值，而是地址，所以存在一个问题，
  // 当你通过useState提供给的函数去修改复杂数据类型中的值时，页面也不会重新渲染，因为地址没有改变
  const [obj, setObj] = useState({
    name: '张三',
    age: 20,
    money: 10000
  }), 
  // 所以如果你想视图发生改变，那么需要修改地址，所以你要传入一个新对象, 但是你想保留原值，怎么办？
  handleClick = () => {
    setObj({
      // 通过展开运算符，对原数据进行展开
      ...obj,
      age: 40
    })
  }
  console.log('重新render了');
  return (
    <div>
      <h1>{ JSON.stringify(obj) }</h1>
     
      <button onClick={handleClick}>点我修改obj</button>
     
    </div>
  ) 
  
}