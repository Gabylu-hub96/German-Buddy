import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();

    axios
      .post("/api/tasks", { name: taskName, description: taskDescription })
      .then((res) => navigate("/"))
      .catch((e) => {
        console.log(e);
        // error message ?
      });
  };

  return (
    <div>
      <h1>Add New Task</h1>
      <label htmlFor="taskName">Task Name:</label>
      <input
        type="text"
        id="taskName"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <br />
      <label htmlFor="taskDescription">Task Description:</label>
      <textarea
        id="taskDescription"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <br />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
