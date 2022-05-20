// 在react的16.8.0中提出了hooks，类似于VUE3中的composition API
// 由于类组件的性能低于函数组件，但是函数组组件中不能提供state，所以使用hooks配合函数组件进行开发，效率和性能大大提高
// 使用hooks需要从React的核心包中导入
import { useState } from 'react' 
export default function App () {
  // useState提供数据，但是useState函数调用后会得到一个数组，数组的第0项是数据，第1项是修改数据的方法
  // 修改数据的方法的命名规范 --》 set + 数据名，小驼峰
  // --------------------------------------------- count --------------------------------------------
  const [count, setCount] = useState(0) // 可以使用数组的解构方法进行解构, 并且useState可以多次使用
  const handleClick = () => setCount(count-1)
  // --------------------------------------------- car -------------------------------------------------
  const [car, setCar] = useState('劳斯莱斯')
  return (
    <div>
      App -- { count } 
      {/* 修改数据的方法可以写在行内也可以单独抽走，如果逻辑简单写在行内即可 */}
      <button onClick={() => setCount(count+1)}>点我加一</button>
      <button onClick={handleClick}>点我减一</button>
      {/* ----------------------------car -------------------------- */}
      <h1>{car}</h1>
      <button onClick={() => setCar('宾利')}>换车</button>
    </div>
  ) 
  
}