import { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import StatsCard from "../components/dashboard/StatsCard";
import SearchBar from "../components/tasks/SearchBar";
import TaskFilters from "../components/tasks/TaskFilters";
import TaskTable from "../components/tasks/TaskTable";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

const Dashboard = ({
  tasks,
  deleteTask,
  setSelectedTask
}) => {

  const [searchTerm, setSearchTerm] = useState("");

  const [priorityFilter, setPriorityFilter] =
    useState("All");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const stats = [
  {
    title: "Total Tasks",
    count: tasks.length
  },
  {
    title: "Pending",
    count: tasks.filter(
      task => task.status === "Pending"
    ).length
  },
  {
    title: "Completed",
    count: tasks.filter(
      task => task.status === "Completed"
    ).length
  },
  {
    title: "High Priority",
    count: tasks.filter(
      task => task.priority === "High"
    ).length
  },
  {
    title: "Overdue",
    count: tasks.filter(task =>
      task.deadline &&
      new Date(task.deadline) < new Date() &&
      task.status !== "Completed"
    ).length
  }
];

  const filteredTasks = tasks.filter((task) => {

    const matchesSearch =
      task.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesPriority =
      priorityFilter === "All" ||
      task.priority === priorityFilter;

    const matchesStatus =
      statusFilter === "All" ||
      task.status === statusFilter;

    return (
      matchesSearch &&
      matchesPriority &&
      matchesStatus
    );

  });

  // const sortedTasks = [...filteredTasks]
  // .sort(
  //   (a, b) =>
  //     new Date(a.deadline) -
  //     new Date(b.deadline)
  // )
  // .slice(0, 5);

  const sortedTasks = [...filteredTasks]
  .sort((a, b) => {
    const dateA = a.deadline
      ? new Date(a.deadline)
      : new Date("9999-12-31");

    const dateB = b.deadline
      ? new Date(b.deadline)
      : new Date("9999-12-31");

    return dateA - dateB;
  })
  .slice(0, 5);

  return (
    <MainLayout>

      <h1>Dashboard</h1>

      <div className="dashboard-cards">

        {stats.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            count={item.count}
          />
        ))}

      </div>

      <h2>
  Upcoming Tasks
  (Top 5 by Deadline)
</h2>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <TaskFilters
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <TaskTable
  tasks={sortedTasks}
  setSelectedTask={setSelectedTask}
  deleteTask={deleteTask}
/>

<div className="view-all-container">
  <Link
    to="/tasks"
    className="view-all-btn"
  >
    View All Tasks →
  </Link>
</div>

    </MainLayout>
  );
};

export default Dashboard;