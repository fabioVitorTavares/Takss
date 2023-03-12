import { Axios, AxiosRequestConfig } from 'axios';
import { CorsOptions } from 'cors';
const configs:AxiosRequestConfig = {
  baseURL: 'http://127.0.0.1:8080',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'strict-origin-when-cross-origin': '*'
  }
  
}
const axios = new Axios(configs);


export async function getAllTasks(){
  const respose = await axios.get('/task/getAllTasks');
  
}