import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://burger-f4559-default-rtdb.asia-southeast1.firebasedatabase.app",
});
export default axiosInstance;
