import axios from "axios";
import { Base_Url } from "./BaseUrl";

export const axiosInstance = axios.create({
  baseURL: Base_Url,
  headers: {
    "content-type": "application/json",
  },
});
