import { useState } from 'react'
import Context from './Context'
import Son from './Son'
export default function App() {
  const [num, setNum] = useState(0)
  const handleChangeNum = () => {
    setNum(num + 2)
  }
  return (
    // provider不仅可以提供属性值，还可以提供方法
    <Context.Provider value={
      {num, handleChangeNum}
    }>
      <div>
        app
        <Son></Son>
      </div>
    </Context.Provider>
  )
}
