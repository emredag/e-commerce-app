import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import { OneProductProvider } from "./contexts/OneProductContext";
import { ProductProvider } from "./contexts/ProductContext";
import { ProfileProvider } from "./contexts/ProfileContext";
import addAuthorization from "./hooks/addAuthorization";

import GetCookie from "./hooks/getCookie";
import Router from "./router/router";
import "./styles/style.scss";

function App() {
  const { pathname } = useLocation();

  addAuthorization();

  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <ProfileProvider>
            <OneProductProvider>
              {pathname !== "/register" && pathname !== "/login" && <Navbar />}
              <Router />
            </OneProductProvider>
          </ProfileProvider>
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
