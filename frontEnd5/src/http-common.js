import axios from "axios";

export default axios.create({
  // baseURL1: "http://localhost:8080/api",
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json"
  }
});
