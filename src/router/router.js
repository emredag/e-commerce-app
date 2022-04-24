import React from "react";
import LoginPage from "../pages/Register-Login-Page/LoginPage";
import RegisterPage from "../pages/Register-Login-Page/RegisterPage";
import IndexPage from "../pages/Index/IndexPage";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}

export default Router;
