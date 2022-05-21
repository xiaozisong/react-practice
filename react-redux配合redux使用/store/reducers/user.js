const initValue = {name: 'zs', age: 12, score: 50}
function user(prevState = initValue, action) {
  if (action.type === 'add') {
    return {
      ...prevState,
      score: prevState.score + action.count
    }
  } else {
    return prevState
  }
}
export default user