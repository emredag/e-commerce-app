import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";

function Form(props) {
  // *********** Yup Validation ***********
  const validation = Yup.object({
    email: Yup.string()
      .email("Geçerli bir mail adresi giriniz.")
      .required("Eposta alanı zorunludur."),
    password: Yup.string()
      .required("Şifre alanı boş bırakılamaz.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });
  // **************************************

  return (
    <div className="registerLoginForm">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validation}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            resetForm();
          }, 1000);
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
              <div className="smallTitle">
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
                  className="allInput"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="errorMsg">{errors.email}</div>}
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
                  className="allInput"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className="errorMsg">{errors.password}</div>
                )}
              </div>

              <div className="forgotPassword">
                <a href=""> {props.forgot} </a>
              </div>

              <div className="submitButtonContainer">
                <button
                  type="submit"
                  className="submitBtn"
                  disabled={!dirty || isSubmitting}
                >
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
