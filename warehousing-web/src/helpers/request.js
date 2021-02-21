import axios from "axios";
import getAuthToken from "./token";

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  
  headers: { "X-Custom-Header": "foobar" },
});

request.interceptors.request.use(
  function (config) {
    if (!config.headers) {
      config.headers = {};
    }

    const token = getAuthToken();
    if (token) {
      config.headers["Authorization"] = `${token.data}`;
    }

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default request;
