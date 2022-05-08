import SetCookie from "./setCookie";

function addCookie(response) {
  SetCookie("mail", response.user.email);
  SetCookie("authToken", response.jwt);
  SetCookie("login", true);
  SetCookie("userId", response.user.id);
}

export default addCookie;
