import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import { OneProductProvider } from "./contexts/OneProductContext";
import { ProductProvider } from "./contexts/ProductContext";

import GetCookie from "./hooks/getCookie";
import Router from "./router/router";
import "./styles/style.scss";

function App() {
  const { pathname } = useLocation();
  const getToken = GetCookie("authToken");
  const signature = `Bearer ${getToken}`;

  useEffect(() => {
    if (getToken) {
      axios.interceptors.request.use(
        (config) => {
          config.headers.authorization = signature;
          config.headers.accept = "application/json";
          config.headers["Content-Type"] = "application/json";
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    }
  });

  return (
    <>
      <AuthProvider>
        <OneProductProvider>
          <ProductProvider>
            {pathname !== "/register" && pathname !== "/login" && <Navbar />}
            <Router />
          </ProductProvider>
        </OneProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
