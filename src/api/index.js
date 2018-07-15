import axios from "axios";

const options = {
  headers: { "Content-Type": "application/json" }
};

export default class Api {
  static post(url, values) {
    return axios.post(url, values, options);
  }

  static get(service, url) {
    return axios.get(url);
  }
}
