// 如果当分支条件过多时，最好收敛在一个函数中，以保证模板的精简
const getHTag = (type) => {
  if (type === 1) {
    return <h1> this is H1 </h1>
  }
  if (type === 2) {
    return <h2> this is H2 </h2>
  }
  if (type === 3) {
    return <h3> this is H3 </h3>
  }
}
function App() {
  return (
    <div className="App">
      { getHTag(1) }
      { getHTag(2) }
      { getHTag(3) }
    </div>
  );
}

export default App;
