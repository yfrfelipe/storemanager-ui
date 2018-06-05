import { ApiCustomer, ApiProvider, ApiStock } from "../api";

export const getCustomer = () => {
  console.log("loading customer");
  return ApiProvider.get(`provider/1`).then(res => res.data);
};
