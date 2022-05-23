import axios from "axios"

export const getList =  (id) => {
  return async dispatch => {
  const res = await axios.get(`http://geek.itheima.net/v1_0/articles?channel_id=${id}&timestamp=${Date.now()}`)
  console.log(res, '6')
    dispatch({
      type: 'news/getList',
      list: res.data.data.results
    })
  }
}