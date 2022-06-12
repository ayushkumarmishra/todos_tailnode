import React, { useContext } from "react";
import { TaskListContext } from "../context/Tasklist";

const Task = ({ todo, onClick }) => {
  const { removeTodo } = useContext(TaskListContext);
  const handleClick = (e) => {
    removeTodo(todo.id);
  };
  return (
    <li className="list-item">
      <span>{todo.title}</span>
      <div>
        <button className="btn-delete task-btn" onClick={handleClick}>
          <i className="fas fa-trash-alt"></i>
        </button>
        {/* <button className="btn-edit task-btn">
          <i className="fas fa-pen"></i>
        </button> */}
      </div>
    </li>
  );
};

export default Task;
