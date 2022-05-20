import { useRef } from 'react'
export default function App() {
  // --------------------------------------- 使用useRef获取DOM元素 -------------------------------------
  const h3Ref = useRef(null) // 初始化一个ref
  const getRefEle = () => {
    // ref是包含current属性的对象，并且可以直接修改current的value
    // ref不仅可以获取dom，还可以获取组件
    console.log(h3Ref);
  }
  return (
    <div>
      App
      <h3 ref={h3Ref}>我是h3</h3>
      <button onClick={getRefEle}>点击获取H3</button>
    </div>
  )
}
