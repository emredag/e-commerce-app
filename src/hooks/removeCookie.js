import jsCookie from "js-cookie";

const RemoveCookie = (cookieName) => {
  jsCookie.remove(cookieName);
};

export default RemoveCookie;
