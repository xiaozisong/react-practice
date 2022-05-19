import { useState, useEffect } from 'react' 

/* 
    useEffect --》 副作用，怎么理解副作用呢？
    举个简单的例子：人生病了之后要吃药，每种药都有主作用，但是它也有副作用
    比如，感冒吃感冒灵999：主作用：治疗头疼，发烧，咽喉肿痛等，但是副作用为：嗜睡，疲惫、乏力等。
    -------------------------------------------------------------
    那怎么理解useEffect呢？
    组件的主作用是什么呢？组件的主作用就是负责渲染，而你操作本地存储，发送Ajax，操作DOM等，都属于副作用

    举个例子： 组件的生命周期为 --->>> 
              constructor --> render -->  componentDidMount 挂载阶段 
              render --> componentDidUpdate 更新阶段
    如果你在组件渲染时发送了一个ajax请求，改变了变量，那么就会再次发一次请求，对服务器造成不必要的压力
    而且当你改变数据时，也会重新触发 componentDidUpdate，那每次触发都会发送不必要的请求，所以使用useEffect去解决

    ——————————————————————————————————————————————————useEffect————————————————————————————————————————————————
    1. 语法：useEffect(函数, 数组)
    2. 执行时机：useEffect的默认执行时机为 componentDidMount + componentDidUpdate
*/

export default function App () {
  const [num, setNum] = useState(0)
  // useEffect中的函数可以是箭头函数，也可以是普通的匿名函数，因为在函数组件中没有this，所以这里更依赖与使用箭头函数
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