import axios from "axios";

const instance = axios.create({
  baseURL: process.env.baseUrl,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
    // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
    "Content-Type": "application/json",
    "provider-code": "deltaban",
    // Accept: 'application/json',
    Accept:
      "application/json, text/plain, */*, application/json, text/plain, */*",
    // Authorization: null,
  },
});
instance.interceptors.response.use((response) => {
  return response;
});
export default instance;
