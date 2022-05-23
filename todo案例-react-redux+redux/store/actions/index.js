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
// 全选
export const checkAll = (flag) => {
  return {
    type: 'checkAll',
    flag
  }
}
// 编辑
export const editTodo = (id, name) => {
  return {
    type: 'editTodo',
    id,
    name
  }
}
// 清除已完成
export const clearCompleted = () => {
  return {
    type: 'clearCompleted',
  }
}

// --------------------------- 切换底部 ----------------------------
export const changeActive = active => {
  return {
    type: 'changeActive',
    active
  }
}