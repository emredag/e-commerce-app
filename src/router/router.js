import React, { useContext } from "react";
import LoginPage from "../pages/Register-Login-Page/LoginPage";
import RegisterPage from "../pages/Register-Login-Page/RegisterPage";
import IndexPage from "../pages/Index/IndexPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthContext from "../contexts/AuthContext";

function Router() {
  const { isLogin } = useContext(AuthContext);

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route
          path="register"
          element={isLogin ? <Navigate replace to="/" /> : <RegisterPage />}
        />
        <Route
          path="login"
          element={isLogin ? <Navigate replace to="/" /> : <LoginPage />}
        />
      </Routes>
    </div>
  );
}

export default Router;
