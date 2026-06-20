import api from "./api";

const API_URL = "/api/tasks";

export const getTasks = () => {
  return api.get(API_URL);
};

export const createTask = (task) => {
  return api.post(
    API_URL,
    task
  );
};

export const updateTask = (
  id,
  task
) => {
  return api.put(
    `${API_URL}/${id}`,
    task
  );
};

export const deleteTask = (
  id
) => {
  return api.delete(
    `${API_URL}/${id}`
  );
};
