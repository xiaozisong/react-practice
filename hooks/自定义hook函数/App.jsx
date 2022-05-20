import { useState } from 'react'
import Dog from './Dog'
import { useMouseMove, useScroll } from './hooks'
export default function App() {
  const [num, setNum] = useState(0)
  const { x, y } = useMouseMove()
  const { x: scrollX, y: scrollY } = useScroll()
  return (
    <div style={{width: 2000, height: 2000}}>
      {/* 如果这里也需要使用到鼠标移动的x 与 y呢？ 我们需要将功能逻辑抽到自定义hooks中 */}
      <h1>当前鼠标的x：{x} - 当前鼠标的y：{y}</h1>
      <h1>当前卷去的x：{scrollX} - 当前卷去的y：{scrollY}</h1>
      { num < 3 ? <Dog></Dog> : '移除事件了'}
      <button onClick={() => setNum(num + 1)}>移除事件</button>
    </div>
  )
}
