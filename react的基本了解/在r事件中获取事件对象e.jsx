// react中的事件对象e

const handleClick = (e) => {
  console.log('我是事件对象e', e)
  // 阻止默认事件
  e.preventDefault()
}

function App() {
  return (
    <div className="app">
      <a onClick={handleClick} href="https://www.baidu.com">百度一下</a>
    </div>
  )
}

export default App;
