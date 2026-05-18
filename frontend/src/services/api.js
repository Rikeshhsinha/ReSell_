import axios from "axios";

const API = axios.create({
  baseURL: "https://resell-1-s487.onrender.com/api",
});

export default API;