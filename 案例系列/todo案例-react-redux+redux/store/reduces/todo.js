const list = [
  {id: 1, name: '喝酒', flag: true},
  {id: 2, name: '抽烟', flag: false},
  {id: 3, name: '打豆豆', flag: false},
]
export default function todos(prevState = list, action) {
  switch(action.type){
    case 'delTodo':
      return prevState.filter(item => item.id !== action.id)
    case 'changeState':
      return prevState.map(item => {
        if(item.id === action.id){
          return {
            ...item,
            flag: !item.flag
          }
        }
        return item
      })
    case 'addTodo':
      return [
        ...prevState,
        {
          id: +new Date(),
          name: action.todo,
          flag: false
        }
      ]
    case 'checkAll':
      return prevState.map(item => {
        return {
          ...item,
          flag: action.flag
        }
      })
    case 'editTodo':
      return prevState.map(item => {
        if(item.id === action.id) {
          return {
            ...item,
            name: action.name
          }
        } else {
          return item
        }
      })
    case 'clearCompleted':
      return prevState.filter(item => !item.flag)
    default:
      return prevState
  }
}

/* 
  filter的reduces是一个数组，通过数组遍历
  点击一项li切换状态
  main组件要拿到这个状态，从而进行过滤

*/