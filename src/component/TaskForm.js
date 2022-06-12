import React, { useContext, useState } from "react";
import { TaskListContext } from "../context/Tasklist";

const TaskForm = () => {
  const { addTodo } = useContext(TaskListContext);

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
    // console.log(title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={title}
        type="text"
        className="task-input"
        placeholder="Add Tasks..."
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          Add Todo
        </button>
        <button className="btn clear-btn">Clear</button>
      </div>
    </form>
  );
};

export default TaskForm;
