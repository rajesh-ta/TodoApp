import React, { useState, useEffect } from "react";

import Header from "./Header";
import Form from "./Form";
import TodosList from "./TodosList";
import { auth } from "../googleSignin/config";

import "./TodosListApp.css";

const TodosListApp = ({ user }) => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header user={user} />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          ></Form>
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          ></TodosList>
        </div>
        <div className="logout-div">
          <button onClick={() => auth.signOut()} className="button-logout">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodosListApp;
