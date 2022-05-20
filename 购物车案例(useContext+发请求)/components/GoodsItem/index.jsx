import React from 'react'
import './index.scss'
import MyCount from '../MyCount'
export default function GoodsItem({
  id,
  goods_name,
  goods_img,
  goods_price,
  goods_count,
  goods_state,
  changeState
}) {
  return (
    <div className="my-goods-item">
      <div className="left">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id={id} checked={goods_state} onChange={() => changeState(id)} />
          <label className="custom-control-label" htmlFor={id}>
            <img
              src={goods_img}
              alt=""
            />
          </label>
        </div>
      </div>
      <div className="right">
        <div className="top">{ goods_name }</div>
        <div className="bottom">
          <span className="price">¥ { goods_price }</span>
          <MyCount count={goods_count} id={id}></MyCount>
        </div>
      </div>
    </div>
  )
}
