import axios from "axios";

const apiUrl = "http://localhost:3001/";

export const axiosInstance = axios.create({
  baseURL: apiUrl,
});
