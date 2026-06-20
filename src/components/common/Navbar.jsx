import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Task Manager</h2>
      </div>
{/* 
      <ul className="navbar-links">
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/tasks">
            Tasks
          </Link>
        </li>

        <li>
          <Link to="/add-task">
            Add Task
          </Link>
        </li>
      </ul> */}

      <div className="navbar-user">
        <span>
          Welcome,
          {" "}
          {user.name || "User"}
        </span>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;