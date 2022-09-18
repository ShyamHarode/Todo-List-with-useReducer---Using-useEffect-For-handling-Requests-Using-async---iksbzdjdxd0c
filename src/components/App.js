import React, { useReducer } from 'react'
import { todoReducer } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
const initialState = { todos: [] };
const App = () => {
  const [state,dispatch] = useReducer(todoReducer,initialState)
  
 
  return (
    <div id="main">
      <AddTodo dispatch={dispatch} />
      {state.todos.map((todo) => (
        <Todo dispatch={dispatch} todo={todo} ></Todo>
      ))}
    </div>
  )
}


export default App;
