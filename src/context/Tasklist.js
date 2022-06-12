import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

export const TasklistContextProvider = (props) => {
  const [todos, setTodos] = useState([
    {
      title: "Task1",
      id: 1,
    },
    {
      title: "Task2",
      id: 2,
    },
    {
      title: "Task3",
      id: 3,
    },
  ]);

  // Adding a new todo
  const addTodo = (title) => {
    setTodos([{ title, id: uuidv4() }, ...todos]);
  };
  return (
    <TaskListContext.Provider
      value={{
        todos,
        addTodo,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};
