import { createContext, useEffect, useState } from "react";
import GetCookie from "../hooks/getCookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setLogin] = useState();

  useEffect(() => {
    GetCookie("login") ? setLogin(true) : setLogin(false);
  });

  const values = {
    isLogin,
    setLogin,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
