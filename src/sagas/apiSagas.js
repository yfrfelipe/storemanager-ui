import { ApiCustomer, ApiProvider, ApiStock } from "../api";

const options = {
  headers: { "Content-Type": "application/json" }
};

export const getCustomer = () => {
  console.log("loading customer");
  return ApiProvider.get(`provider/1`).then(res => res.data);
};

export const saveProvider = values => {
  console.log("saving provider", values);
  return ApiProvider.post(
    "provider/",
    JSON.stringify(values),
    options
  ).catch(e => console.log("RESPONSE", e.response.data));
};
