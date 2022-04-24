import React from "react";
import { useLocation } from "react-router-dom";
import womanPhoto from "../../constants/images/formPageWoman.jpg";
import logo from "../../constants/icons/logo.svg";
import Form from "./Form";

function Page() {
  const { pathname } = useLocation();

  let title;
  let smallTitle;
  let submitButton;
  let otherButton;
  let forgot;

  if (pathname === "/register") {
    title = "Üye Ol";
    smallTitle = "üye ol!";
    submitButton = "Üye Ol";
    otherButton = (
      <div className="otherLink">
        Hesabın var mı? <a href="/login">Giriş Yap</a>
      </div>
    );
  } else if (pathname === "/login") {
    title = "Giriş Yap";
    smallTitle = "giriş yap!";
    submitButton = "Giriş";
    otherButton = (
      <div className="otherLink">
        Hesabın yok mu? <a href="/register">Üye Ol</a>
      </div>
    );
    forgot = "Şifremi Unuttum";
  }

  return (
    <div className="formContainer">
      <div className="leftSide">
        <div className="womenImg">
          <img src={womanPhoto} alt="Photo" />
        </div>
      </div>
      <div className="rightSide">
        <div className="rightSideContainer">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="forms">
            <Form
              title={title}
              smallTitle={smallTitle}
              submitButton={submitButton}
              otherButton={otherButton}
              forgot={forgot}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
