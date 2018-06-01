import { ApiCustomer, ApiProvider, ApiStock } from "../api";

export const getCustomer = () => {
  console.log("loading customer");
  return ApiStock.get(`localidades`).then(res => res.data);
};
