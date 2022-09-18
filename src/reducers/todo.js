const todoReducer = (state, action) => {
    switch (action.type) {
            case "ADD": {
      const newTodo = {
        id: Date.now(),
        heading: action.text,
      };

      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }

    case "DELETE": {
      const filtered = state.todos.filter((ele) => ele.id !== action.id);

      return { ...state, todos: [...filtered] };
    }

    }
}

export { todoReducer }
