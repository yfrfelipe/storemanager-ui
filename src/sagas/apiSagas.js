import axios from "axios";

const options = {
  headers: { "Content-Type": "application/json" }
};

export default class Api {
  static fetchPost(url, values) {
    return axios.post(
      `https://customermanager-java.herokuapp.com${url}`,
      values,
      options
    );
  }
  static fetchGet(url) {
    return axios.get(`https://customermanager-java.herokuapp.com/${url}`);
  }
}

// export const saveProvider = values => {
//   console.log("saving provider", values);
//   return ApiProvider.post(
//     "provider",
//     values,
//     options

//   ).catch(e => console.log("erro", e.response.data));
// };

// export const saveCustomer = values => {
//   console.log("saving customer", values);
//   return ApiCustomer.post(
//     "customer",
//     values,
//     options

//   ).catch(e => console.log("erro", e.response.data));
// };
