import React, { useContext } from "react";
import GetCookie from "../../hooks/getCookie";
import logo from "../../constants/icons/profileLogo.png";
import logOut from "../../hooks/logOut";
import AuthContext from "../../contexts/AuthContext";
import { toastSuccess } from "../../constants/Toastify";
import loginLogo from "../../constants/icons/loginLogo.png";
import { useNavigate } from "react-router-dom";

function UserInfo() {
  const userMail = GetCookie("mail");
  const { setLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const logOutBtn = () => {
    setLogin(false);
    logOut();
    navigate("/");
    toastSuccess("Çıkış yapıldı.");
  };

  return (
    <div className="userInfo">
      <div className="user">
        <img src={logo} alt="Profil Logosu" /> <span>{userMail}</span>
      </div>

      <button onClick={logOutBtn} className="btn btn-danger register">
        <img src={loginLogo} alt="Çıkış Yap Logosu" /> Çıkış yap
      </button>
    </div>
  );
}

export default UserInfo;
