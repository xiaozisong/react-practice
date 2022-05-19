// 如何在jsx语法中使用变量
// 花括号中可以写变量，也可以写函数，还可以写表达式
const name = '肖子凇' // 名字变量
const getAge = () => {
  return 18
}
function App() {
  return (
    <div className="App">
      { name } { getAge() } { true ? <span>岁</span> : null}
    </div>
  );
}

export default App;
