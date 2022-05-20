import { useState } from 'react' 
export default function App () {
  const [num, setNum] = useState(0),
  // 每个处理函数所改变的num都是独立存在的,互不影响, 
  // 当你延迟去修改num时, 期间你通过同步的方法去修改num, 最后并不会影响到开启延时器时定义的数据的值, 而是会被覆盖掉
  // 如果不是独立的，那5秒前开启延时器的num值+10，那这时的num就是10，当延时期间操作num进行+100操作，那应该在10的基础上累加
  // 延迟修改
  handleDelayClick = () => {
    setTimeout(() => {
      setNum(num+10)
    }, 5000)
  },
  // 同步修改
  handleClick = () => {
    setNum(num+100)
  }
  return (
    <div>
      <h1>{ num }</h1>

      <button onClick={handleDelayClick}>点我延迟修改num</button>
      <button onClick={handleClick}>点我修改Num</button>

    </div>
  ) 
  
}