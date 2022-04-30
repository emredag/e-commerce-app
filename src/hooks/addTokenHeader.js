import axios from "axios";
import GetCookie from "./getCookie";

const addTokenHeader = () => {
  const getToken = GetCookie("authToken");

  const signature = `Bearer ${getToken}`;

  axios.defaults.headers["Authorization"] = signature;

  console.log(signature);
};

export default addTokenHeader;
