import { useState } from "react";
import "../../styles/addtaskform.css";

const AddTaskForm = ({ addTask }) => {

  const [title, setTitle] = useState("");

  const [description, setDescription] =
    useState("");

  const [priority, setPriority] =
    useState("Medium");

  const [deadline, setDeadline] =
    useState("");

  const [status, setStatus] =
    useState("Pending");

  const handleSubmit = (e) => {

    e.preventDefault();

    const newTask = {
      title,
      description,
      priority,
      deadline,
      status
    };

    addTask(newTask);
    setTitle("");
setDescription("");
setPriority("Medium");
setDeadline("");
setStatus("Pending");

const handleSubmit = (e) => {

  e.preventDefault();

  const newTask = {
    title,
    description,
    priority,
    deadline,
    status
  };

  addTask(newTask);

  setTitle("");
  setDescription("");
  setPriority("Medium");
  setDeadline("");
  setStatus("Pending");

};
  };

  return (

    <form
  className="task-form"
  onSubmit={handleSubmit}
>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        placeholder="Description"
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
        Add Task
      </button>

    </form>

  );
};

export default AddTaskForm;