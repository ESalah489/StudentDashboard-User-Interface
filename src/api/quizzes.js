import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/quizzes",
});

export const getAllQuizzes = () => API.get("/");
export const createQuizzes = (data) => API.post("/", data);
export const updateQuizzes = (id, data) => API.patch(`/${id}`, data);
export const deleteQuizzes= (id) => API.delete(`/${id}`);
