import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import Girl from './Girl'
import Boy from './Boy'
export default function Search(props) {
  const handleClick = () => {
    // 编程式跳转,通过props可以获取到历史的路由地址信息
    console.log(props.history);
    // 通过调用push方法，可以实现编程式导航的跳转, push方法是向浏览器的历史记录栈压入每一次跳转的记录
    props.history.push('/')
    // replace方法，则是替换掉本次的记录
  }
  return (
    <div>
      搜索&nbsp;&nbsp;
      {/* 
        嵌套路由，路径必须包含父级路由的路径
        NavLink 属于声明式导航
        React Router也同样存在编程式导航
      */}
      <NavLink to='/search/girl'>美女</NavLink> &nbsp;&nbsp;
      <NavLink to='/search/boy'>帅哥</NavLink>  &nbsp;&nbsp;
      
      <Route path='/search/girl' component={Girl}></Route>
      <Route path='/search/boy' component={Boy}></Route>
      <button onClick={handleClick}>跳转</button>
    </div>
  )
}
