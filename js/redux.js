// const reducer = (state = [] , action) => {
//   switch (action.type) {
//     case "ADD_TODO": {
//         let newTodo = {
//             id:state.length,
//             title: action.title
//         }
//         return [...state ,newTodo]
//     }
//     case "REMOVE_TODO": {
//         let newState = [...state].filter((todo) => todo.id !== action.id)
//         return newState
//     }

//     default: {
//       return state;
//     }
//   }
// };

const createStore = (reducer) => {
  let state;

  function dispatch(action) {
state = reducer(state,action)
  }
  function getState() {
    return state
  }

  return {
    dispatch,
    getState, 
  };
};

// let store = createStore(reducer) ;

// store.dispatch({ type:"ADD_TODO", title:"Buy grocery" })
// store.dispatch({ type:"ADD_TODO", title:"learn react" })
// store.dispatch({ type:"ADD_TODO", title:"learn redux" })
// store.dispatch({ type:"REMOVE_TODO", id:1 })

// console.log(store.getState())