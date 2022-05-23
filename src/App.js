import React, { Component } from 'react'
import Home from './components/Home'
import Search from './components/Search'
export default class App extends Component {
  state = {
    hash: '/home'
  }
  handleChange = ()  => {
    window.addEventListener('hashchange', () => {
      this.setState({
        hash: window.location.hash.slice(1)
      })
    })
  }
  render() {
    return (
      <div className="app">
        <a href='#/home'  onClick={this.handleChange}>主页</a>
        <a href='#/search' onClick={this.handleChange}> 搜索</a>
        { this.state.hash === '/home' && <Home></Home> }
        { this.state.hash === '/search' && <Search></Search> }
      </div>
    )
  }
}
