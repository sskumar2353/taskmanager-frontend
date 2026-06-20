import { useState, useEffect } from "react";

import AppRoutes from "./routes/AppRoutes";


import {
  getTasks,
  createTask,
  updateTask as updateTaskAPI,
  deleteTask as deleteTaskAPI
} from "./services/taskService";

import {
  toast,
  ToastContainer
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {

  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] =
    useState(null);

useEffect(() => {

  const token =
    localStorage.getItem(
      "token"
    );

  if (token) {
    fetchTasks();
  }

}, []);

  const fetchTasks = async () => {

  const token =
    localStorage.getItem(
      "token"
    );

  if (!token) {
    return;
  }

  try {

    const response =
      await getTasks();

    console.log(
      "API Response:",
      response.data
    );

    setTasks(
      Array.isArray(
        response.data
      )
        ? response.data
        : []
    );

  } catch (error) {

    console.error(error);

    if (
      error.response?.status === 401
    ) {

      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "user"
      );

      return;
    }

    toast.error(
      "Failed to fetch tasks"
    );

  }

};

  const addTask = async (newTask) => {

    try {

      await createTask(newTask);

      toast.success(
        "Task Created Successfully"
      );

      await fetchTasks();

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to create task"
      );

    }

  };

  const deleteTask = async (id) => {

    try {

      await deleteTaskAPI(id);

      toast.success(
        "Task Deleted Successfully"
      );

      await fetchTasks();

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to delete task"
      );

    }

  };

  const updateTask = async (
    updatedTask
  ) => {

    try {

      await updateTaskAPI(
        updatedTask.id,
        updatedTask
      );

      toast.success(
        "Task Updated Successfully"
      );

      await fetchTasks();

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to update task"
      );

    }

  };

  return (
    <>
      <AppRoutes
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
      />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default App;