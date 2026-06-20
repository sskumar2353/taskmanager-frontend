import axios from "axios";

const API_URL =`${import.meta.env.VITE_API_URL}/api/auth`;

export const loginUser = (
  credentials
) => {

  return axios.post(
    `${API_URL}/login`,
    credentials
  );

};

export const registerUser = (
  userData
) => {

  return axios.post(
    `${API_URL}/register`,
    userData
  );

};
