import { useEffect, useState } from 'react'
// 封装自定义hook，作用是可以拿到鼠标移动时在页面中的坐标
export function useMouseMove() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0    
  })
  useEffect(() => {
    // 为了清除事件，需要将function单独抽离出来
    let handleMouseMove = function(e) {
      setPosition({
        x: e.pageX,
        y: e.pageY
      })
    }

    // 为页面添加鼠标移动事件
    document.addEventListener('mousemove', handleMouseMove)
    // 移除副作用
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, []) 
  return position
}
// 封装自定义hook，作用是获取到页面的卷去的距离
export function useScroll() {
   const [scrollObj, setScrollObj] = useState({
     x: 0,
     y: 0
   })

   useEffect(() => {
    let handleScroll = function() {
      setScrollObj({
        x: window.pageXOffset,
        y: window.pageYOffset
      })
    }

    // 为页面添加鼠标移动事件
    document.addEventListener('scroll', handleScroll)
    // 移除副作用
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, []) 
  return scrollObj
}