// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 0

export const addTodo = (payload) => {
  payload.id = ++todoId;
    payload.status = "Todo"; 
    return{ 
      type: "AddTodo",
      payload: payload
    } 
} 

export const removeTodo = (payload) => { 
    return{ 
      type: "RemoveTodo",
      payload
    } 
} 

export const toInProgress = (payload) => { 
    return{ 
      type: "ToInProgress",
      payload
    } 

} 

export const toDone= (payload) => {
  return {
    type: "ToDone",
    payload: payload
  }
} 







