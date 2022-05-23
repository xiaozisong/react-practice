import classNames from 'classnames'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelList, changeActive } from '../store/actions/channel'

export default function Channel() {
  const dispatch = useDispatch()
  const list = useSelector(state => state.channel.list)
  const active = useSelector(state => state.channel.active)
  const handleChangeActive = (id) => {
    dispatch(changeActive(id))
  }
  useEffect(() => {
    dispatch(getChannelList())
  }, [dispatch])
  return (
    <ul className="catagtory">
      {list.map(item => <li 
      className={classNames({select: item.id === active})} 
      key={item.id}
      onClick={() => handleChangeActive(item.id)}
      >
        { item.name }
      </li>)}
    </ul>
  )
}
