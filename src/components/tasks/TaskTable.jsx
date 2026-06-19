import TaskRow from "./TaskRow";
import "../../styles/tasktable.css";

const TaskTable = ({
  tasks,
  setSelectedTask,
  deleteTask
}) => {

  return (
    <table>

      <thead>
  <tr>
    <th>Title</th>
    <th>Priority</th>
    <th>Deadline</th>
    <th>Status</th>
    <th>Created</th>
    <th>Updated</th>
    <th>Actions</th>
  </tr>
</thead>

      <tbody>

        {tasks.length === 0 ? (
          <tr>
            <td
              colSpan="5"
              style={{ textAlign: "center" }}
            >
              No Tasks Found
            </td>
          </tr>
        ) : (
          tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              setSelectedTask={setSelectedTask}
              deleteTask={deleteTask}
            />
          ))
        )}

      </tbody>

    </table>
  );
};

export default TaskTable;