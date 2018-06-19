import { ApiCustomer, ApiProvider, ApiStock } from "../api";

const options = {
  headers: { "Content-Type": "application/json" }
};

export const getCustomer = () => {
 // console.log("loading customer");
  return ApiProvider.get(`provider/1`).then(res => res.data);
};

export const saveProvider = values => {
  console.log("saving provider", values);
  return ApiProvider.post(
    "provider",
    values,
    options
  
  ).catch(e => console.log("erro", e.response.data));
};


export const saveCustomer = values => {
  console.log("saving customer", values);
  return ApiCustomer.post(
    "customer",
    values,
    options
  
  ).catch(e => console.log("erro", e.response.data));
};