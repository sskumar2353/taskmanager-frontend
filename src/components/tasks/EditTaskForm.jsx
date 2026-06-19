import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/addtaskform.css";

const EditTaskForm = ({
  selectedTask,
  updateTask
}) => {

  const navigate = useNavigate();

  const [title, setTitle] =
    useState(selectedTask.title);

  const [description, setDescription] =
    useState(selectedTask.description || "");

  const [priority, setPriority] =
    useState(selectedTask.priority);

  const [deadline, setDeadline] =
  useState(
    selectedTask.deadline
      ? selectedTask.deadline.split("T")[0]
      : ""
  );

  const [status, setStatus] =
    useState(selectedTask.status);

  const handleSubmit = (e) => {

    e.preventDefault();

    updateTask({
      ...selectedTask,
      title,
      description,
      priority,
      deadline,
      status
    });

    navigate("/tasks");
  };

  return (
    <form
      className="task-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <input
        type="date"
        value={deadline}
        onChange={(e) =>
          setDeadline(e.target.value)
        }
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button type="submit">
        Update Task
      </button>

    </form>
  );
};

export default EditTaskForm;