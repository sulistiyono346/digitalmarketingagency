import axios from "axios";
const BaseUrlUser = "https://dummyjson.com";

// API URL Home
export const getRandomuser = (payload) => {
  return axios.get(`${BaseUrlUser}/users?limit=8`, payload);
};
