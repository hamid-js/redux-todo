import {
  addTodo,
  doTodo,
  removeTodo,
  filterAllTodo,
  filterCompletedTodo,
  filterInCompletedTodo,
} from "./actionTypes.js";

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
export const filterAllTodoAction = () => {
  return {
    type: filterAllTodo,
  };
};
export const filterCompletedTodoAction = () => {
  return {
    type: filterCompletedTodo,
  };
};
export const filterInCompletedTodoAction = () => {
  return {
    type: filterInCompletedTodo,
  };
};

