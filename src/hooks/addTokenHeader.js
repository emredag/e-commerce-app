import axios from "axios";
import jsCookie from "js-cookie";
import GetCookie from "./getCookie";

// const addTokenHeader = () => {
//   const getToken = getCookie("authToken");

//   const signature = `Bearer ${getToken}`;

//   axios.defaults.headers = {
//     authorization: `Bearer ${jsCookie.get("authToken")}`,
//     accept: "application/json",
//     "Content-Type": "application/json",
//   };

//   console.log(axios.defaults.headers);
// };

// export default addTokenHeader;

export default function addTokenHeader() {
  // const getToken = GetCookie("authToken");
  // const signature = `Bearer ${getToken}`;

  // axios.create({
  //   headers: {
  //     authorization: signature,
  //     accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // });
  

 
}
