import React from "react";
import LoginPage from "../pages/Register-Login-Page/LoginPage";
import RegisterPage from "../pages/Register-Login-Page/RegisterPage";
import IndexPage from "../pages/Index/IndexPage";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import { ToastContainer } from "react-toastify";

function Router() {
  return (
    <div>
      {/* <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        className={"errorToast"}
      /> */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default Router;
