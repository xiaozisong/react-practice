import { useState } from 'react'

// 准备数据
const arr = [
  {name: '小红', score: 99},
  {name: '小明', score: 100},
  {name: '小刚', score: 95},
]

export default function App() {

  

  // ----------------------------------------------- useState的回调函数参数形式 -----------------------------------
  // 现在有需求，将arr中的score求和之后的结果，渲染在页面中

  /* 
    这样做会有问题？
      1. 这个操作会不会生效？ 会生效
      2. 如果生效了，会有什么样的问题
        这样做的问题就是，useState中的数据只会在组件渲染时执行一次，但是每次修改数据会触发render + componentDidUpdate
        然而useState中的数据已经存储到hooks中的state了，那下面计算总分数的代码，在每次componentDidUpdate都会触发，但是
        又没有了实际意义，所以我们利用useState的特性，将求和函数通过回调的方式放到useState中
  */
  // 问题代码  
  // let totalScore = arr.reduce((prev, item ,index) => {
  //   return prev += item.score
  // }, 0)


  // 什么时候会用到回调函数的写法呢？答：当值需要进行计算的时候
  const [num, setNum] = useState(() => {
    let totalScore = arr.reduce((prev, item ,index) => {
      return prev += item.score
    }, 0)
    return totalScore
  })

  return (
    <div>
      <h1>成绩总和{num}</h1>
      <button onClick={() => setNum(num + 1)}>点击成绩 + 1</button>
    </div>
  )
}
