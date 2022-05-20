import { useState, useEffect } from 'react' 
export default function App () {
  const [num, setNum] = useState(0)
  /* 
    —————————————————————————————————————————useEffect传参的三种方式 + 执行时机分析——————————————————————————————————————————
    1. useEffect(函数) 只传递一个参数的情况下的执行时机为 componentDidMount + componentDidUpdate（组件渲染完页面时会触发一次，当数据发生变化时也会触发）
    2. useEffect(函数, []) 这种方式的执行时机为 componentDidMount，因为空数组中没有添加任何依赖项，类似于监听器
    3. useEffect(函数, [依赖项]) 如果数据组写入了依赖项，那么它的执行实际为componentDidMount + componentDidUpdate(依赖项的数据发生改变时)
  */

  useEffect(() => {
    console.log('componentDidUpdate');
  })
  return (
    <div>
      <h1>{ num }</h1>

      <button onClick={() => setNum(num + 1)}>点我延迟修改num</button>

    </div>
  ) 
  
}