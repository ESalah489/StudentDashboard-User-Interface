import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/announcements",
});

export const getAllAnnouncements = () => API.get("/");
export const createAnnouncement = (data) => API.post("/", data);
export const updateAnnouncement = (id, data) => API.patch(`/${id}`, data);
export const deleteAnnouncement = (id) => API.delete(`/${id}`);
