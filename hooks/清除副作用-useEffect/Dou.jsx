import { useEffect } from 'react'

export default function Dou() {
  // --------------------------------------  useEffect清除副作用(副功能) ----------------------------------
  // 在有的场景下, 我们需要清除副作用, 比如在组建销毁时, 清除定时器延时器, 清除本地存储的记录等等，那怎么清除呢？····

  /* 
    开启一个延时器，以下代码会产生问题
      1. 当App组件每次更改num值时，会触发componentDidUpdate，那就会重新渲染Dou组件，从而造成开启多个定时器的效果
      2. 当Dou组件销毁时，定时器不会被清除，造成内存泄露的问题
  */
  // setInterval(() => {
  //   console.log('你过来啊，来打我呀');
  // }, 1000)

  /* 
    问：如何解决这个问题呢？
    答：使用useEffect来解决
  */
  //  以下代码并不会清除定时器，效果和上述代码一样，但是会有不同的点
  //  不同点就是执行时机不一样，因为useEffect的执行是componentDidMount + componentDidUpdate
  //  如果直接放在外面的话，执行时机会比useEffect快，在生命周期的角度看的话
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('你过来啊，来打我呀');
    }, 1000)

    // 如果要清除副作用带来的影响， 需要给定一个返回值，而且返回值要是一个函数
    // 为什么要返回一个函数呢？因为这是effect的清除机制，每个effect都可以返回一个清除机制。（React 官网）
    return () => clearInterval(timer)

  }, []) // 如果依赖项是一个空数组，解决了开启多个定时器的问题，但是不会清除副作用带来的影响

  return (
    <div>Dou</div>
  )
}
