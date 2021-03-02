import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInputs] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  })

  const handleChange = (e)=>{
    setInputs(e.target.value)
  }

  const handleSubmit = e=>{
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random()*1000),
      text: input
    });
    setInputs("")
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
        <input
        type="text"
        placeholder="Update the item"
        value={input}
        name="text"
        className="todo-input edit"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button edit">Update Item</button>
      </>
      ) : (
        <>
        <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add Todo</button>
      </>
      )}
      
    </form>
  );
}

export default TodoForm;
