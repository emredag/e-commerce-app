import React, { useState } from "react";
import Logo from "../../constants/icons/logo.svg";
import { Link } from "react-router-dom";
import registerLogo from "../../constants/icons/registerLogo.png";
import loginLogo from "../../constants/icons/loginLogo.png";

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

          <Link to="/profile">
            <span>Hesabım</span>
          </Link>
        </div>
      ) : (
        <div className="navRightSide">
          <Link to="/register">
            <button className="btn btn-primary register">
              <img src={registerLogo} alt="Register Logo" /> Üye Ol
            </button>
          </Link>
          <Link to="/login">
            <button className="btn btn-primary register">
              <img src={loginLogo} alt="Login Logo" /> Giriş Yap
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
