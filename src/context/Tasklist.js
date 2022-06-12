import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

export const TasklistContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialState);
  const [done, setDone] = useState();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Adding a new todo
  const addTodo = (title) => {
    setTodos([{ title, id: uuidv4() }, ...todos]);
  };

  //Removing a Task.
  const removeTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.id !== id) return todo.id !== id;
        else {
          setDone(todo.id);
        }
      })
    );
  };

  // Removing all the items in the todo list
  const removeAll = () => {
    setTodos([]);
  };

  return (
    <TaskListContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        removeAll,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};
