import { useState } from 'react' 
export default function App () {
  // 这里的count只是声明的一个简单的局部变量，如果你直接修改它，并不会影响视图
  // 而在vue2中使用Object.defineProperty，V3中使用proxy进行数据劫持和代理，所以你直接修改数据，会影响到视图，但是hooks中不是这样的
  const [count, setCount] = useState(0)  // useState只会初始化一次数据
  console.log('重新render了');
  return (
    <div>
      <h1>{ count }</h1>
      {/* 
        为什么通过setCount修改会重新render呢？
        因为，当useState第一次初始化数据后，你每次通过useState提供的函数去修改数据，新值会存放到hooks中的State中
        当你下一次再修改数据时，它会从State中取到你上一次修改的数据，对你第一次使用useState定义的变量进行重新赋值
        从而从新渲染视图，也会触发render。     
      */}
      <button onClick={() => setCount(count+1)}>点我加一</button>
      {/* 当你直接修改count时，不会影响视图的变化，所以不会重新触发render */}
      <button onClick={() => count+10}>直接修改count</button>
    </div>
  ) 
  
}