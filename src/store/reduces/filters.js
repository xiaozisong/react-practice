const flag = 'all'
export default function filter(preState = flag, action) {
  switch(action.type){
    case 'changeActive':
      return action.active
    default:
      return preState
  }
}