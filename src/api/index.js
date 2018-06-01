import axios from "axios";

export const ApiStock = axios.create({
  baseURL: "http://79.143.185.162:8080/sescquiz/"
});

export const ApiCustomer = axios.create({
  baseURL: "localhost:8080"
});

export const ApiProvider = axios.create({
  baseURL: "localhost:8080"
});

