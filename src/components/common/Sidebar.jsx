import { Link } from "react-router-dom";
import "../../styles/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>

        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/tasks">Tasks</Link>
        </li>

        <li>
          <Link to="/add-task">Add Task</Link>
        </li>

        <li>
          <Link to="/edit-task">Edit Task</Link>
        </li>

      </ul>
    </aside>
  );
};

export default Sidebar;