import {
  addTodo,
  doTodo,
  removeTodo,
  getAlltodos
 
} from "./actionTypes.js";

export const getAlltodosAction = () => {
  return {
    type: getAlltodos ,
    
  };
};
export const addTodoAction = (title) => {
  return {
    type: addTodo,
    title
  };
};
export const removeTodoAction = (id) => {
  return {
    type: removeTodo,
    id
  };
};
export const doTodoAction = (id) => {
  return {
    type: doTodo,
    id
  };
};

