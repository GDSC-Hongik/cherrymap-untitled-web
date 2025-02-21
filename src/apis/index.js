import axios from "axios";

axios.defaults.withCredentials = true;

const client = axios.create({
  // baseURL: "http://localhost:8080/api",
  baseURL: "http://ec2-3-38-212-108.ap-northeast-2.compute.amazonaws.com:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
