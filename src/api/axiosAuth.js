import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
});
export default axiosInstance;
