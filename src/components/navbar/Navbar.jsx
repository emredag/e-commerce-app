import React, { useState } from "react";
import Logo from "../../constants/icons/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="navbar">
      <div className="navLeftSide">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>

      {isLogin ? (
        <div className="navRightSide">
          <Link to="add-product">
            <span>Ürün Ekle</span>
          </Link>

          <Link to="profile">
            <span>Hesabım</span>
          </Link>
        </div>
      ) : (
        <div className="navRightSide">
          <Link to="register">
            <span>Register</span>
          </Link>

          <Link to="login">
            <span>Login</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
