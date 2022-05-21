export default function reducer(prevState = 0, action) {
  switch(action.type){
    case 'add':
      return prevState + action.count
    case 'sub':
      return prevState - action.count
    default:
      return prevState
  }
}