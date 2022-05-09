import RemoveCookie from "./removeCookie";

function logOut() {
  RemoveCookie("authToken");
  RemoveCookie("userId");
  RemoveCookie("login");
  RemoveCookie("mail");
  window.location.reload();
}

export default logOut;
