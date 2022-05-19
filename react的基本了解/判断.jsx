// 在vue中的 条件判断使用v-if或者是v-show
// 而在react中， 多使用三元表达式或者是 && 进行判断

const flag = true
function App() {
  return (
    <div className="App">
      { flag ? <span>真棒</span> : <span>真菜</span>}
      { true &&  (
      <div>
        <span>肖子凇</span>
      </div>) }
    </div>
  );
}

export default App;
