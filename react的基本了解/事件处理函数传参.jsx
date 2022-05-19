// react中的事件对象e

const handleClick = (val) => {
  console.log(val)
  console.log(111)
  console.log(this)
  // 阻止默认事件
}

// react中的事件传参的两种方式，一个是通过 () => handleClick(实参)
/* 
  1. 为什么要使用箭头函数呢？
     因为在react中，模板中绑定的事件名如果加括号进行传参的话，会当成函数进行调用
     所以一打开页面时，函数就会自动调用，从而执行一次就不再执行了
     所以要在事件处理函数的前面加上箭头函数，因为未命名的箭头函数为匿名函数，
     匿名函数在模板中使用，但是并为定义过，所以它不会进行调用，
     再使事件处理函数作为返回值进行调用，调用时就会触发事件处理函数，这样就能保障参数的正常传递，和事件的正常调用了


      -------------------   伪代码    ----------------------
      定义事件处理函数
      const handleClick = (val) => console.log(val)


      <button onClick={ () => handleClick('123') }> 点击我传参 </button>


      上面的过程就等价于 一开始不会执行，因为没有被调用，只有当触发点击事件时，才会触发匿名函数，从而进行传参
      function () {
        return handleClick('123')
      }
*/
function App() {
  return (
    <div className="app">
      <button onClick={() => handleClick('123')}>点我</button>
    </div>
  )
}

export default App;
