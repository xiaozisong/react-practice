// 在react中如何实现列表的渲染呢？
// 1. 使用map函数
const songs = [
  {id: 1, name: '痴心绝对'},
  {id: 2, name: '南山南'},
  {id: 3, name: '我是一个人'},
  
] 

function App() {
  return (
    <div className="App">
      <ul>{ songs.map(song => <li key={ song.id }>{song.name}</li>) }</ul>
    </div>
  );
}

export default App;
