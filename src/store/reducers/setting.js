const initValue = {title: '广告标题', img: 'xxxx'}
function setting(prevState = initValue, action) {
  if (action.type === 'changeTitle') {
    return {
      ...prevState,
      title: action.title
    }
  }else {
    return prevState
  }
}
export default setting