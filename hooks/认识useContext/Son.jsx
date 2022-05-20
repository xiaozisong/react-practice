import { useContext } from 'react'
import Context from './Context'

// useContext语法  useContext(父组件提供的数据)
export default function Son() {
  const { num, handleChangeNum } = useContext(Context)
  return (
    // 未使用useContext，会导致结构混乱，类似于render-props
    // <Context.Consumer>
    //   {(data) => {
    //    return ( <div>
    //       { data.num }
    //       <button onClick={data.handleChangeNum}>修改父组件中num</button>

    //     </div>)
        
    //   }}
    // </Context.Consumer>
    <div>
      { num }
      <button onClick={handleChangeNum}>点我修改父组件中的num</button>
    </div>
  )
}
