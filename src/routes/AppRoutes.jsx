import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import AddTask from "../pages/AddTask";
import EditTask from "../pages/EditTask";

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
        path="/"
        element={
          <Dashboard
            tasks={tasks}
            deleteTask={deleteTask}
            setSelectedTask={setSelectedTask}
          />
        }
      />

      <Route
        path="/tasks"
        element={
          <Tasks
            tasks={tasks}
            deleteTask={deleteTask}
            setSelectedTask={setSelectedTask}
          />
        }
      />

      <Route
  path="/add-task"
  element={
    <AddTask
      tasks={tasks}
      addTask={addTask}
      deleteTask={deleteTask}
      setSelectedTask={setSelectedTask}
    />
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

    </Routes>
  );
};

export default AppRoutes;