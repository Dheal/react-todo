const initialState = {
  todos: [
    {
      name: "Belajar Redux",
      status: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
      case "DEL_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo,index) => index !== action.payload)
        // todos: [...state.todos.slice(0, action.payload), ...state.todos.slice(action.payload+1, state.todos.length)]
      }
    default:
      return state;
  }
};

export default todoReducer;
