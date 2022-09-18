import React from 'react';
const Todo = ({ dispatch, todo }) => {
    return (
        <div className="todo">
      {/* {todos.map((ele) => (
        <h1 key={ele.id}>{ele.heading}</h1>
      ))} */}
      <div className="todo-title">
        {todo.heading}
        <button
          className="todo-delete"
          onClick={() => dispatch({ type: "DELETE", id: todo.id })}
        >
          delete
        </button>
      </div>
    </div>
    )
}


export { Todo }

