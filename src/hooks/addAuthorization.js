import axios from "axios";
import GetCookie from "./getCookie";

export default function addAuthorization() {
  const token = GetCookie("authToken");
  const signature = `Bearer ${token}`;

  if (token) {
    axios.interceptors.request.use((config) => {
      config.headers.authorization = signature;
      config.headers.accept = "application/json";
      config.headers["Content-Type"] = "application/json";
      return config;
    });
  }
}
