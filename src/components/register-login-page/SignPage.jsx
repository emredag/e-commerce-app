import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../constants/icons/logo.svg";
import Form from "./Form";
import { Link } from "react-router-dom";

function SignPage() {
  const { pathname } = useLocation();

  let title;
  let smallTitle;
  let submitButton;
  let otherButton;

  if (pathname === "/register") {
    title = "Üye Ol";
    smallTitle = "üye ol!";
    submitButton = "Üye Ol";
    otherButton = (
      <div className="otherLink">
        Hesabın var mı?{" "}
        <Link to="/login">
          <span> Giriş Yap</span>
        </Link>
      </div>
    );
  } else if (pathname === "/login") {
    title = "Giriş Yap";
    smallTitle = "giriş yap!";
    submitButton = "Giriş";
    otherButton = (
      <div className="otherLink">
        Hesabın yok mu?
        <Link to="/register">
          <span> Üye Ol</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="formContainer">
      <div className="leftSide"></div>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignPage;
