// react中，如果即想使用事件对象e，又想携带参数怎么办呢？

const handleClick = (e, val) => {
  console.log(e, val)  
  // 阻止默认事件
}

function App() {
  return (
    <div className="app">
      {/* 在箭头函数中传入形参e, 注意参数的位置要一一对应 */}
      <button onClick={(e) => handleClick(e, '123')}>点我</button>
    </div>
  )
}

export default App;
