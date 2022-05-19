import React, { Component } from 'react'

export default class Son extends Component {
  // 子组件接收 通过props接收，类组件接收需要通过this.props，函数组件直接使用props即可
  render() {
    const { car, changeCar } = this.props
    return (
      <div style={{ width: '100px', height: '100px', border: 'solid 1px black', margin: '10% auto' }}>
        Son--{car}
        <button onClick={() => changeCar('宾利')}>换车</button>
      </div>
    )
  }
}
