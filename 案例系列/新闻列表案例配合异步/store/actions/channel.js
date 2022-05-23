import axios from "axios"
export const getChannelList = () => {
  return async dispatch => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    dispatch({
      type: 'channel/getList',
      list: res.data.data.channels
    })
  }
}
export const changeActive = id => {
  return {
    type: 'channel/changeActive',
    id
  }
}