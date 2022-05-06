import React, { useContext } from "react";
import Logo from "../../constants/icons/logo.svg";
import { Link } from "react-router-dom";
import registerLogo from "../../constants/icons/registerLogo.png";
import loginLogo from "../../constants/icons/loginLogo.png";
import profileLogo from "../../constants/icons/profile.png";
import addProduct from "../../constants/icons/addProductLogo.png";
import AuthContext from "../../contexts/AuthContext";
import RemoveCookie from "../../hooks/removeCookie";
import { toastSuccess } from "../../constants/Toastify";

function Navbar() {
  const { isLogin, setLogin } = useContext(AuthContext);

  const logOut = () => {
    setLogin(false);
    RemoveCookie("authToken");
    RemoveCookie("userId");
    RemoveCookie("login");
    toastSuccess("Çıkış yapıldı.");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="navLeftSide">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>

      {isLogin ? (
        <div className="navRightSide">
          <Link to="/add-product">
            <button className="btn btn-primary register">
              <img src={addProduct} alt="Ürün Ekle Logosu" /> Ürün ekle
            </button>
          </Link>

          <Link to="/profile">
            <button className="btn btn-primary register">
              <img src={profileLogo} alt="Profil Logosu" /> Hesabım
            </button>
          </Link>

          <button onClick={logOut} className="btn btn-primary register">
            <img src={loginLogo} alt="Çıkış Yap Logosu" /> Çıkış yap
          </button>
        </div>
      ) : (
        <div className="navRightSide">
          <Link to="/register">
            <button className="btn btn-primary register">
              <img src={registerLogo} alt="Kayıt Ol Logosu" /> Üye Ol
            </button>
          </Link>
          <Link to="/login">
            <button className="btn btn-primary register">
              <img src={loginLogo} alt="Giriş Yap Logosu" /> Giriş Yap
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
