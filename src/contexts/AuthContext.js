import { createContext, useEffect, useState } from "react";
import GetCookie from "../hooks/getCookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    GetCookie("login") && setLogin(true);
  });

  const values = {
    isLogin,
    setLogin,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
