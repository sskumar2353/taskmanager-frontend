import MainLayout from "../layouts/MainLayout";
import AddTaskForm from "../components/tasks/AddTaskForm";
import TaskTable from "../components/tasks/TaskTable";

const AddTask = ({
  tasks,
  addTask,
  deleteTask,
  setSelectedTask
}) => {

  return (
    <MainLayout>

      <h1>Add Task</h1>

      <AddTaskForm
        addTask={addTask}
      />

      <h2>Created Tasks</h2>

      <TaskTable
        tasks={tasks}
        deleteTask={deleteTask}
        setSelectedTask={setSelectedTask}
      />

    </MainLayout>
  );
};

export default AddTask;