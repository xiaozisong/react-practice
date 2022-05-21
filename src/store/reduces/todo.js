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
    default:
      return prevState
  }
}