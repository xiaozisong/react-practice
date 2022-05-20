import { useState, useEffect } from 'react'
import axios from 'axios'
export default function App() {
  // --------------------------------------- 使用useEffect发送请求 -------------------------------------
  const [list, setList] = useState([])

  // useEffect的第一个回调函数参数，是不能被async所修饰的，如果要在副作用里面发送axios请求，请单独抽到一个函数中
  useEffect(() => {
    const getChannels = async () => {
      const res = await axios.get('http://geek.itheima.net/v1_0/user/channels')
      setList(res.data.data.channels)
    } 
    getChannels()
    // 不能在依赖项中填入list，如果填入list，会陷入死循环
    // 原因是, list一开始为空数组, 在componentDidMount中发送请求后调用setList方法, 将list传入数据
    // 副作用发现依赖的数据发生了改变, 又将重新render, render就会执行useState, 又将list变为空数组, 以此循环
  }, [])

  return (
    <div>
      App
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}
