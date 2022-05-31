import React from 'react'
// 路由的模式除了BrowserRouter模式还有HashRouter，就是URL中带#与不带#，不带#需要后端配合，但是比较简单
// 这里为什么选择BrowserRouter模式呢，因为在后面的路由传参中，BrowserRouter会更好的支持
// 这里使用重命名是为了好维护
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import Hot from './components/Hot'
import NotFound from './components/NotFound'
import './index.css'
import Test from './components/Test'
import Goods from './components/Goods'
export default function App() {
    return (
      // 使用方式, 使用路由组件进行包裹
      <Router>
        {/* 
            HashRouter是使用URL中的哈希值来实现的
              原理是：监听 window 的 hashchange 事件来实现的
            BrowserRouter是使用H5中的History.pushState() 的API来实现的
              原来是：监听 window 的 popstate 事件来实现的
            不管是Link还是NavLink最后都会被解析成a标签

            NavLink实际与Link的使用方式相同，唯一的不同就是NavLink支持激活高亮
            激活高亮的样式可以有多种方式控制，默认室友一个active类名，但是一般用
            的比较少，因为在项目中的样式，使用active类名的较多，所以使用activeClassName配合类名，来控制激活高亮
        */}
        {/* <NavLink activeClassName='active-link' to='/home'>主页</NavLink> &nbsp;&nbsp; */}

        {/* 
          如果把主页的to属性改为 /， 这样就会导致主页组件默认显示并高亮，这样是因为NavLink默认是模糊匹配
          可以使用exact来精确匹配路由地址，这样虽然能解决同时高亮的问题，但是会出现Home组件与其他组件一起展示的问题
          一般建议NavLink与Route组件一起使用exact
        */}
        <NavLink exact activeClassName='active-link' to='/'>主页</NavLink> &nbsp;&nbsp;
        <NavLink activeClassName='active-link' to='/search'>搜索</NavLink> &nbsp;&nbsp;
        <NavLink activeClassName='active-link' to='/hot'>热门推荐</NavLink> &nbsp;&nbsp;

        {/* 动态路由参数，如果不配置动态路由参数，要写三条路由规则，但是没有必要，所以我们配置一下动态路由 */}
        <NavLink activeClassName='active-link' to='/goods/1'>商品1</NavLink> &nbsp;&nbsp;
        <NavLink activeClassName='active-link' to='/goods/2'>商品2</NavLink> &nbsp;&nbsp;
        <NavLink activeClassName='active-link' to='/goods/3'>商品3</NavLink> &nbsp;&nbsp;
        <Test></Test>
        {/*
          Route组件的使用方式:
            path: 路由路径 component: 要显示的组件
          Route组件就类似于Vue中的路由出口, 
          但是vue中的路由出口不够灵活, router-view只能写在固定位置, 而Route组件的位置可以不固定 
          而在React中, 如果没有使用exact或者Switch组件包裹Route的话, 可以渲染多个Route,
        */}
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/search' component={Search}></Route>
          <Route path='/hot' component={Hot}></Route>

          {/* 动态路由参数规则 */}
          <Route path='/goods/:id' component={Goods}></Route>

          {/* 
            如果外面不使用Switch组件进行包裹，因为这个Route没有配置path，所以不管路径地址匹不匹配，它都会存在 
            一般它的作用是展示404页面，并配合Switch组件使用
          */}
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    )
}
