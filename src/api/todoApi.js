import axios from "axios";

const todoApi = axios.create({
  baseURL: "http://localhost:8088",
});

const addToken = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const register = (input) => {
  return todoApi.post("/auth/register", input);
};

export const login = (input) => {
  return todoApi.post("/auth/login", input);
};

export const getMe = (token) => {
  return todoApi.get("/auth/getme", addToken(token));
};

export const getJobs = (token) => {
  return todoApi.get("/todos", addToken(token));
};
