// 删除
export const delTodo = (id) => {
  return {
    type: 'delTodo',
    id
  }
}
// 更改状态
export const changeState = (id) => {
  return {
    type: 'changeState',
    id
  }
}
// 添加
export const addTodo = (todo) => {
  return {
    type: 'addTodo',
    todo
  }
}