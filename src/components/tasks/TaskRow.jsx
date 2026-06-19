import { useNavigate } from "react-router-dom";

import PriorityBadge from "./PriorityBadge";
import StatusBadge from "./StatusBadge";

import "../../styles/taskrow.css";

const TaskRow = ({
  task,
  setSelectedTask,
  deleteTask
}) => {

  const navigate = useNavigate();

  const handleEdit = () => {
    setSelectedTask(task);
    navigate("/edit-task");
  };

  const handleDelete = () => {

    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${task.title}"?`
    );

    if (confirmDelete) {
      deleteTask(task.id);
    }

  };

  const isOverdue =
    task.deadline &&
    new Date(task.deadline) < new Date() &&
    task.status !== "Completed";

  const formattedDeadline = task.deadline
    ? new Date(task.deadline).toLocaleDateString()
    : "-";

  const formattedCreatedAt = task.created_at
    ? new Date(task.created_at).toLocaleDateString()
    : "-";

  const formattedUpdatedAt = task.updated_at
    ? new Date(task.updated_at).toLocaleDateString()
    : "-";

  return (
    <tr>

      <td>{task.title}</td>

      <td>
        <PriorityBadge
          priority={task.priority}
        />
      </td>

      <td
        className={
          isOverdue
            ? "overdue-deadline"
            : ""
        }
      >
        {formattedDeadline}
      </td>

      <td>
        <StatusBadge
          status={task.status}
        />
      </td>

      <td>{formattedCreatedAt}</td>

      <td>{formattedUpdatedAt}</td>

      <td>
        <div className="action-buttons">

          <button
            className="edit-btn"
            onClick={handleEdit}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={handleDelete}
          >
            Delete
          </button>

        </div>
      </td>

    </tr>
  );
};

export default TaskRow;