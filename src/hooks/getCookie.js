import jsCookie from "js-cookie";

const GetCookie = (cookieName) => {
  return jsCookie.get(cookieName);
};

export default GetCookie;
