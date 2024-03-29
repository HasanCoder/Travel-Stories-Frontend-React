import axios from "axios";

const custom_axios = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default custom_axios;
