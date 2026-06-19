import "../../styles/taskfilters.css";

const TaskFilters = ({
  priorityFilter,
  setPriorityFilter,
  statusFilter,
  setStatusFilter
}) => {

  return (

    <div className="filters">

      <select
        value={priorityFilter}
        onChange={(e) =>
          setPriorityFilter(e.target.value)
        }
      >
        <option value="All">
          All Priorities
        </option>

        <option value="High">
          High
        </option>

        <option value="Medium">
          Medium
        </option>

        <option value="Low">
          Low
        </option>

      </select>

      <select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(e.target.value)
        }
      >
        <option value="All">
          All Status
        </option>

        <option value="Pending">
          Pending
        </option>

        <option value="In Progress">
          In Progress
        </option>

        <option value="Completed">
          Completed
        </option>

      </select>

    </div>

  );
};

export default TaskFilters;