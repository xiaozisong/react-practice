import React from "react" 
import Son from './Son'
// import SonBrother from './SonBrother'
class ChangeStateTestComponent extends React.Component {
  // 父传子通过props传递，props可以传递任何类型的数据
  /* 
    1、数字
    2、字符串
    3、布尔值
    4、数组
    5、函数
    6、对象
    ·····
  */
  state = {
    car: '劳斯莱斯'
  }
  render() {
    return (
      <>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          我是父组件 -- {this.state.car}
          <input value={this.state.car} onChange={(e) => this.handleChange(e)}></input>
          <Son car={this.state.car} changeCar={this.changeCar}></Son>
        </div>
      </>
    )
  }
  handleChange = (e) => {
    this.setState({
      car: e.target.value
    })
  }
  changeCar = (car) => {
    this.setState({
      car
    })
  }
}

function App() {
  return (
    <div className="app">
      <ChangeStateTestComponent>
      </ChangeStateTestComponent>
    </div>
  )
}

export default App
