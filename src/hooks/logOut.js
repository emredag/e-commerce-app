import RemoveCookie from "./removeCookie";

function logOut() {
  RemoveCookie("authToken");
  RemoveCookie("userId");
  RemoveCookie("login");
  RemoveCookie("mail");
}

export default logOut;
