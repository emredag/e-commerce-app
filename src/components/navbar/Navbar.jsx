import React, { useContext } from "react";
import Logo from "../../constants/icons/logo.svg";
import { Link } from "react-router-dom";
import registerLogo from "../../constants/icons/registerLogo.png";
import loginLogo from "../../constants/icons/loginLogo.png";
import profileLogo from "../../constants/icons/profile.png";
import addProduct from "../../constants/icons/addProductLogo.png";
import AuthContext from "../../contexts/AuthContext";

function Navbar() {
  const { isLogin } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navLeftSide">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>

      {isLogin ? (
        <div className="navRightSide">
          <Link to="/addProduct">
            <button className="btn btn-primary addProduct">
              <img src={addProduct} alt="Ürün Ekle Logosu" />
              <span>Ürün ekle</span>
            </button>
          </Link>

          <Link to="/profile">
            <button className="btn btn-primary ">
              <img src={profileLogo} alt="Profil Logosu" /> Hesabım
            </button>
          </Link>
        </div>
      ) : (
        <div className="navRightSide">
          <Link to="/register">
            <button className="btn btn-primary ">
              <img src={registerLogo} alt="Kayıt Ol Logosu" /> Üye Ol
            </button>
          </Link>
          <Link to="/login">
            <button className="btn btn-primary ">
              <img src={profileLogo} alt="Giriş Yap Logosu" /> Giriş Yap
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
