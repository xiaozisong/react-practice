import { useState } from 'react'
import Dou from './Dou'
export default function App() {
  const [num, setNum] = useState(0)

  return (
    <div>
      <h1>现在的num是：{num}</h1>

      { num < 5 ? <Dou></Dou> : '豆豆被消灭了'}

      <button onClick={() => setNum(num + 1)}>打豆豆</button>
    </div>
  )
}
