import MainLayout from "../layouts/MainLayout";
import EditTaskForm from "../components/tasks/EditTaskForm";

const EditTask = ({
  selectedTask,
  updateTask
}) => {

  if (!selectedTask) {
    return (
      <MainLayout>
        <h2>No Task Selected</h2>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <h1>Edit Task</h1>

      <EditTaskForm
        selectedTask={selectedTask}
        updateTask={updateTask}
      />

    </MainLayout>
  );
};

export default EditTask;