import React, { Component } from 'react'
import Channel from './components/Channel'
import NewsList from './components/newsList'
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Channel></Channel>
        <NewsList />
      </div>
    )
  }
}
