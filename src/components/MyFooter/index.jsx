import React from 'react'
import './index.scss'
export default function MyFooter({list, handleSelectAll}) {
  const isAll = list.every(item => item.goods_state)
  // prev代表上次一函数执行的返回值
  // 计算选中的总数量
  const totalCount = list.reduce((prev, item, index) => { 
    if (item.goods_state) {
      return prev += item.goods_count
    } else {
      return prev
    }
  }, 0)
  // 计算选中商品的总价格
  const totalPrice = list.reduce((prev, item, index) => {
    if (item.goods_state) {
      return prev += item.goods_count * item.goods_price
    } else {
      return prev
    }
  }, 0)
  return (
  <div className="my-footer">
    <div className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" id="footerCheck" checked={isAll} onChange={() => handleSelectAll(isAll)}/>
      <label className="custom-control-label" htmlFor="footerCheck">全选</label>
    </div>
    <div>
      <span>合计:</span>
      <span className="price">¥ { totalPrice }</span>
    </div>
    <button type="button" className="footer-btn btn btn-primary">结算 ({totalCount})</button>
  </div>
  )
}
