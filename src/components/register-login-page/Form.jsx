import { Formik } from "formik";
import * as Yup from "yup";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchRegister, fetchLogin } from "../../services/Services";
import { toastError, toastSuccess } from "../../constants/Toastify";
import AuthContext from "../../contexts/AuthContext";
import SetCookie from "../../hooks/setCookie";

function Form(props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isLogin, setLogin } = useContext(AuthContext);

  // *********** Yup Validation ***********
  const validation = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(8).max(20),
  });
  // **************************************

  // const backPage = navigate(-1 == undefined ? "/" : -1);

  return (
    <div className="registerLoginForm">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validation}
        onSubmit={(values) => {
          {
            pathname === "/register" &&
              fetchRegister({
                username: values.email,
                email: values.email,
                password: values.password,
              })
                .then((response) => {
                  setLogin(true);

                  SetCookie("authToken", response.data.jwt);
                  SetCookie("login", true);
                  SetCookie("userId", response.data.user.id);

                  toastSuccess("Kayıt başarılı. Hoşgeldiniz!");

                  navigate("/");
                })
                .catch((error) => {
                  toastError("Email kullanılmakta.");
                });
          }

          {
            pathname === "/login" &&
              fetchLogin({
                identifier: values.email,
                password: values.password,
              })
                .then((response) => {
                  setLogin(true);

                  SetCookie("authToken", response.data.jwt);
                  SetCookie("login", true);
                  SetCookie("userId", response.data.user.id);

                  toastSuccess("Giriş başarılı. Hoşgeldiniz!");
                  navigate("/");
                })
                .catch((error) => {
                  toastError("Emailiniz veya şifreniz hatalı.");
                });
          }
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          dirty,
          isSubmitting,
          touched,
        }) => (
          <>
            <div className="formTitle">
              <div className="title">{props.title}</div>
              <div id="a" className="smallTitle">
                Fırsatlardan yararlanmak için {props.smallTitle}
              </div>
            </div>
            {/* *********** Form *********** */}
            <form className="form" onSubmit={handleSubmit}>
              <div className="emailInput inputContainers">
                <label className="inputTitle" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email@example.com"
                  className={`allInput ${errors.email && "errorInput"}`}
                  value={values.email}
                  onChange={handleChange}
                />
              </div>

              <div className="passwordInput inputContainers">
                <label className="inputTitle" htmlFor="password">
                  Şifre
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Şifreni gir"
                  className={`allInput ${errors.password && "errorInput"}`}
                  value={values.password}
                  onChange={handleChange}
                />
              </div>

              <div className="forgotPassword">
                <div
                  className={pathname === "/login" ? `forgot` : `hiddenForget`}
                >
                  <span>Şifremi Unuttum</span>
                </div>
              </div>

              <div className="submitButtonContainer">
                <button type="submit" className="submitBtn" disabled={!dirty}>
                  {props.submitButton}
                </button>
              </div>
            </form>
            {/* **************************** */}
            <div className="otherBtn">{props.otherButton}</div>
          </>
        )}
      </Formik>
    </div>
  );
}

export default Form;
