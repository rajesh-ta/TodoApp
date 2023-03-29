import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import classes from "./Form.module.css";

const Form = (props) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = props.todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    props.setTodos(newTodo);
    props.setEditTodo("");
  };

  useEffect(() => {
    if (props.editTodo) {
      props.setInput(props.editTodo.title);
    } else {
      props.setInput("");
    }
  }, [props.setInput, props.editTodo]);
  const onInputChange = (event) => {
    props.setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!props.editTodo) {
      props.setTodos([
        ...props.todos,
        { id: uuidv4(), title: props.input, completed: false },
      ]);
      props.setInput("");
    } else {
      updateTodo(props.input, props.editTodo.id, props.editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a task.."
        className={classes["task-input"]}
        value={props.input}
        required
        onChange={onInputChange}
      ></input>
      <button className={classes["button-add"]} type="submit">
        {props.editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
