import { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import TaskTable from "../components/tasks/TaskTable";

const Tasks = ({
  tasks,
  deleteTask,
  setSelectedTask
}) => {

  const [currentPage, setCurrentPage] =
    useState(1);

  const tasksPerPage = 10;

  const indexOfLastTask =
    currentPage * tasksPerPage;

  const indexOfFirstTask =
    indexOfLastTask - tasksPerPage;

  const sortedTasks = [...tasks].sort(
    (a, b) => {

      const dateA = a.deadline
        ? new Date(a.deadline)
        : new Date("9999-12-31");

      const dateB = b.deadline
        ? new Date(b.deadline)
        : new Date("9999-12-31");

      return dateA - dateB;

    }
  );

  const currentTasks =
    sortedTasks.slice(
      indexOfFirstTask,
      indexOfLastTask
    );

  const totalPages =
    Math.ceil(
      tasks.length / tasksPerPage
    );

  return (
    <MainLayout>

      <h1>All Tasks</h1>

      <TaskTable
        tasks={currentTasks}
        deleteTask={deleteTask}
        setSelectedTask={setSelectedTask}
      />

      {tasks.length > 0 && (

        <div className="pagination">

          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage(
                currentPage - 1
              )
            }
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={
              currentPage === totalPages
            }
            onClick={() =>
              setCurrentPage(
                currentPage + 1
              )
            }
          >
            Next
          </button>

        </div>

      )}

    </MainLayout>
  );
};

export default Tasks;