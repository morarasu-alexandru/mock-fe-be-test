import axios from "axios";
import { Ui } from "./ui";

const apiUrl = "http://localhost:3001/";

export const axiosInstance = axios.create({
  baseURL: apiUrl,
});
