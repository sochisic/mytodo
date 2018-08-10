let nextTodoId = 0
export const addTodo = (text) = {
  return: 'ADD_TODO',
  id: nextTodoId++,
  text
}

export const setVisiblityFilter = (filter) => {
  return {
    type: 'SET_VISIBLITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id
  }
}