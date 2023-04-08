import { Axios, AxiosRequestConfig } from "axios";
import { CorsOptions } from "cors";
const configs: AxiosRequestConfig = {
  baseURL: "http://127.0.0.1:8080",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};
const axios = new Axios(configs);

export async function getAllTasks() {
  const respose = await axios.get("/task/getAllTasks");
  return respose.data;
}

export async function saveTask() {
  const newTask = {
    description: "Dormir",
    date: "2023-03-01T00:00:00.000+00:00",
    dateCreated: "2023-03-01T00:00:00.000+00:00",
  };
  const respose = await axios.post("/task/addNewTask", newTask);
  console.log(respose);
}
