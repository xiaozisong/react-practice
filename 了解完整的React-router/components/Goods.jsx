import React from 'react'
import { useParams } from 'react-router-dom'

export default function Goods(props) {
  // 如果想要获取动态路由参数，第一种方式是可以从props的match下的params中获取
  // 但是这么写会比较麻烦，react-router为我们提供了一个hook
  console.log(props.match.params.id)
  const { id } = useParams()
  return (
    <div>Goods - {id}</div>
  )
}
