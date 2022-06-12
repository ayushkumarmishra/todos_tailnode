import React, { useContext } from "react";
import { TaskListContext } from "../context/Tasklist";
import Task from "./Task";

const TaskList = () => {
  const { todos } = useContext(TaskListContext);
  return (
    <div>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <Task
              todo={todo}
              key={todo.id}
              onClick={() => {
                console.log(todo);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
