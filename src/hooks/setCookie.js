import jsCookie from "js-cookie";

const SetCookie = (cookieName, cookieValue) => {
  jsCookie.set(cookieName, cookieValue);
};

export default SetCookie;
