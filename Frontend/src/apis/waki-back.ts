import axios from "axios";

const wakiBack = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

export default wakiBack;
