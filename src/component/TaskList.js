import React, { useContext } from "react";
import { TaskListContext } from "../context/Tasklist";
import Task from "./Task";

const TaskList = () => {
  const { todos } = useContext(TaskListContext);
  return (
    <div>
      {todos.length ? (
        <ul className="list">
          {todos.map((todo) => {
            return <Task todo={todo} key={todo.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">Add Some Todos...</div>
      )}
    </div>
  );
};

export default TaskList;
