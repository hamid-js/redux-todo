import { addTodo, doTodo, removeTodo, getAlltodos } from "../Redux/actionTypes.js";
import { addTodoAction, removeTodoAction, doTodoAction, getAlltodosAction } from "../Redux/actionCreators.js";

const todosContainer = document.querySelector(".todo-list");
const todoInputElem = document.querySelector(".todo-input");
const addTodoBtn = document.querySelector(".todo-button");
const filterOptionsElem = document.querySelector(".filter-todo");

// binding for module
window.removeTodoHandler = removeTodoHandler;
window.completeTodoHandler = completeTodoHandler;

function todolistReducer(state = [], action) {
  switch (action.type) {
    case getAlltodos: {
      return state;
    }
    case addTodo: {
      let newState = [...state];
      let newTodoObj = {
        id: crypto.randomUUID(),
        title: action.title,
        isCompleted: false,
      };
      newState.push(newTodoObj);
      return newState;
    }
    case removeTodo: {
      let copyState = [...state];
      let newState = copyState.filter((todo) => todo.id !== action.id);
      return newState;
    }
    case doTodo: {
      console.log(state);

      let newState = [...state];
      newState.forEach((todo) => {
        if (todo.id === action.id) {
          todo.isCompleted = !todo.isCompleted;
        }
      });
      return newState;
    }

    default: {
      return state;
    }
  }
}

const store = createStore(todolistReducer);

addTodoBtn.addEventListener("click", addTodoHanler);
filterOptionsElem.addEventListener("change", changeTodoHanler);

function addTodoHanler(event) {
  event.preventDefault();
  const newTodoTitle = todoInputElem.value.trim();
  if (newTodoTitle !== "") {
    store.dispatch(addTodoAction(newTodoTitle));
    const todos = store.getState();
    todoInputElem.value = "";
    console.log("addTodoBtn.addEventListener ~ todo:", todos);
    generateTodosInDom(todos);
    todoInputElem.focus();
  }
}
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && todoInputElem.value.trim() !== "") {
    console.log();

    addTodoHanler(event);
  }
});
function removeTodoHandler(todoId) {
  store.dispatch(removeTodoAction(todoId));
  const todos = store.getState();
  generateTodosInDom(todos);
}

function changeTodoHanler() {
  store.dispatch(getAlltodosAction());
  let todos = store.getState();

  if (filterOptionsElem.value === "completed") {
    let completedTodos = todos.filter((todo) => todo.isCompleted);
    generateTodosInDom(completedTodos);
  } else if (filterOptionsElem.value === "incomplete") {
    let inCompletedTodos = todos.filter((todo) => !todo.isCompleted);

    generateTodosInDom(inCompletedTodos);
  } else if (filterOptionsElem.value === "all") {
    generateTodosInDom(todos);
  }
}
function completeTodoHandler(todoId) {
  store.dispatch(doTodoAction(todoId));
  const todos = store.getState();
  generateTodosInDom(todos);
}

function generateTodosInDom(todos) {
  todosContainer.innerHTML = "";
  todos.forEach((todo) => {
    todosContainer.insertAdjacentHTML(
      "beforeend",
      `
    <div class="todo ${todo.isCompleted && "completed"} ">
           <li class="todo-item">${todo.title}</li>
         <button class="complete-btn" onclick=completeTodoHandler("${todo.id}")>

            <i class="fas fa-check-circle"></i>
          </button>
          <button class="trash-btn" onclick=removeTodoHandler("${todo.id}")>

            <i class="fas fa-trash"></i>
          </button>
        </div> 
    `
    );
  });
}
