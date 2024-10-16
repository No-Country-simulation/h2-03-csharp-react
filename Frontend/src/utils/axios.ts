import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://www.wakiback.somee.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
})