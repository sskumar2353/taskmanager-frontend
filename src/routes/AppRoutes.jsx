import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import AddTask from "../pages/AddTask";
import EditTask from "../pages/EditTask";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import ProtectedRoute from "../components/auth/ProtectedRoute";

const AppRoutes = ({
  tasks,
  addTask,
  deleteTask,
  updateTask,
  selectedTask,
  setSelectedTask
}) => {

  return (
    <Routes>
      <Route
  path="/login"
  element={<Login />}
/>

<Route
  path="/register"
  element={<Register />}
/>
      <Route
  path="/"
  element={
    <ProtectedRoute>
      <Dashboard
        tasks={tasks}
        deleteTask={deleteTask}
        setSelectedTask={setSelectedTask}
      />
    </ProtectedRoute>
  }
/>

      <Route
  path="/tasks"
  element={
    <ProtectedRoute>
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        setSelectedTask={setSelectedTask}
      />
    </ProtectedRoute>
  }
/>

     <Route
  path="/add-task"
  element={
    <ProtectedRoute>
      <AddTask
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        setSelectedTask={setSelectedTask}
      />
    </ProtectedRoute>
  }
/>

      <Route
  path="/edit-task"
  element={
    <EditTask
      selectedTask={selectedTask}
      updateTask={updateTask}
    />
  }
/>

<Route path="/forgot-password" element={ <ForgotPassword /> } />

<Route path="/reset-password" element={ <ResetPassword /> } />

    </Routes>
  );
};

export default AppRoutes;