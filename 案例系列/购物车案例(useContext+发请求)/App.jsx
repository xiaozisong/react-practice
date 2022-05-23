import { useState, useEffect, createContext } from 'react'
import './App.scss'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import GoodsItem from './components/GoodsItem'
import axios from 'axios'

export const AppContext = createContext()

export default function App() {
  // ----------------------------------------------- LIST -----------------------------------
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem('list')) || [] // 本地持久化  
  }) 

// 发送请求获取数据的副作用
useEffect(() => {
  // 判断list数组是否存有数据，如果没有再发送请求
  if (list.length) {
    setList(list)
  } else {
    const getShopList = async () => {
      const res = await axios.get('https://www.escook.cn/api/cart')
      setList(res.data.list)
    }
    getShopList()
  }
}, [list])


// 单独做本地存储的副作用
useEffect(() => {
  localStorage.setItem('list', JSON.stringify(list))
}, [list])

// 修改单项的checked属性
const changeState = (id) => {
  setList(
    list.map(item => {
      if (item.id === id) {
        return {
          ...item,
          goods_state: !item.goods_state
        }
      }else{
        return item
      }
    })
  )
}
// 处理是否全选
const handleSelectAll = (isAll) => {
  console.log(isAll);
  setList(
    list.map(item => {
      return {
        ...item,
        goods_state: !isAll
      }
    })
  )
}
// 改变单个商品的数量
const handleChangeCount = (id, count) => {
  if(count <= 1) return 
  setList(
    list.map(item => {
      if (item.id === id) {
        return {
          ...item,
          goods_count: count
        }
      }
      return item
    })
  )
}
  return (
    <AppContext.Provider value={{ handleChangeCount }}>
      <div className="app">
        <MyHeader>购物车</MyHeader>

        {list.map(item => <GoodsItem {...item} key={item.id} changeState={changeState}></GoodsItem> )}

        <MyFooter list={list} handleSelectAll={handleSelectAll}></MyFooter>
      </div>
    </AppContext.Provider>
  )
}
