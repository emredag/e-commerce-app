import React, { useContext } from "react";
import LoginPage from "../pages/Register-Login-Page/LoginPage";
import RegisterPage from "../pages/Register-Login-Page/RegisterPage";
import IndexPage from "../pages/Index/IndexPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthContext from "../contexts/AuthContext";
import ProductDetailPage from "../pages/Product-Detail/ProductDetailPage";
import AddProductPage from "../pages/Add-Product/AddProductPage";
import ProfilePage from "../pages/Profile/ProfilePage";

function Router() {
  const { isLogin } = useContext(AuthContext);

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<IndexPage />} />

        <Route
          path="/register"
          element={isLogin ? <Navigate replace to="/" /> : <RegisterPage />}
        />

        <Route
          path="/login"
          element={isLogin ? <Navigate replace to="/" /> : <LoginPage />}
        />

        <Route path="/productId=:productId" element={<ProductDetailPage />} />

        <Route
          path="/addProduct"
          element={!isLogin ? <Navigate replace to="/" /> : <AddProductPage />}
        />

        {/* !isLogin ? <Navigate replace to="/" /> : */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default Router;
