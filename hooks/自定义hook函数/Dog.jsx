import Img from './01.jpg'
import { useMouseMove } from './hooks'
export default function Dou() {
  // 将其抽离到hooks文件中，封装自定义hook函数
  // const [position, setPosition] = useState({
  //   x: 0,
  //   y: 0    
  // })
  // useEffect(() => {
  //   // 为了清除事件，需要将function单独抽离出来
  //   let handleMouseMove = function(e) {
  //     setPosition({
  //       x: e.pageX,
  //       y: e.pageY
  //     })
  //   }

  //   // 为页面添加鼠标移动事件
  //   document.addEventListener('mousemove', handleMouseMove)
  //   // 移除副作用
  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove)
  //   }
  // }, []) 
  const { x, y } = useMouseMove()
  return (
    <div>
      {/* 实现一个需求，图片跟随鼠标移动 */}
      <img src={Img} alt="" style={
        {
        position: 'absolute',
        top: y + 10,
        left: x + 10,
        width: 200, 
        height: 200
        }
      }/>

    </div>
  )
}
