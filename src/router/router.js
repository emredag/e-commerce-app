import React, { useContext } from "react";
import LoginPage from "../pages/Register-Login-Page/LoginPage";
import RegisterPage from "../pages/Register-Login-Page/RegisterPage";
import IndexPage from "../pages/Index/IndexPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthContext from "../contexts/AuthContext";
import ProductContext from "../contexts/ProductContext";
import ProductDetailPage from "../pages/Product-Detail/ProductDetailPage";

function Router() {
  const { isLogin } = useContext(AuthContext);
  const { productId, setProductId } = useContext(ProductContext);

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
        <Route path="product/:productId" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default Router;
