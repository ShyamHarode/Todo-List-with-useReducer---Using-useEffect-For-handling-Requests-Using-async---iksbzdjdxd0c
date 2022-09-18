import React from "react"
import { useState } from "react";

const AddTodo = ({ dispatch }) => {
     const [textInput, setTextInput] = useState("");


    return (
        <>
         <form id="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", text: textInput });
          setTextInput("");
        }}
      >
        <input id="todo-input"
          type={"text"}
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        ></input>
        <button type={"submit"}>add</button>
      </form>
        </>
    )
}

export { AddTodo }
