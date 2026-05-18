import axios from "axios";

const API = axios.create({
  baseURL: "https://resell-4hzi.onrender.com/api",
});

export default API;