import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Test(props) {
  // 并不是什么时候都可以拿到路由信息的
  console.log(props.history);
  // 如果非要获取的话，可以通过useHistory()这个HOOK获取到
  const history = useHistory()
  console.log(history);
  return (
    <div>我是Test组件
      <button onClick={() => history.push('/')}>我是Test组件的返回</button>
    </div>
  )
}
