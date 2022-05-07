import { Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import ReactDom from "react-dom";
import { toastBuySuccess, toastError } from "../../constants/Toastify";
import OneProductContext from "../../contexts/OneProductContext";
import GetCookie from "../../hooks/getCookie";
import undifendProduct from "../../constants/images/undifendProduct.jpg";
import closeModal from "../../constants/icons/close.png";

import {
  baseURL,
  fetchOneProduct,
  fetchSendOffer,
} from "../../services/Services";
import LoadingSpinner from "../global/LoadingSpinner";

export default function SendOffer({ open, onClose, productId }) {
  const { oneProduct, setOneProduct, setOffers, loading, setLoading } =
    useContext(OneProductContext);

  const clearInput = () => {
    document.getElementById("customPrice").value = "";
  };

  const errorMsg = () => {
    setLoading(false);
    toastError("Geçerli bir teklif belirleyiniz");
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="offer-overlay" />
      <div className="offer-modals">
        <Formik
          initialValues={{
            product: "",
            offerPrice: null,
            users_permissions_user: "",
          }}
          onSubmit={(values) => {
            setLoading(true);

            Number(values.perCent)
              ? fetchSendOffer({
                  product: oneProduct.id.toString(),
                  users_permissions_user: GetCookie("userId"),
                  offerPrice: Number(values.perCent),
                })
                  .then(() => {
                    onClose(false);

                    fetchOneProduct(productId)
                      .then((response) => {
                        setOneProduct(response.data);
                        setOffers(response.data.offers);
                      })
                      .catch((error) => {
                        console.log(error);
                      });

                    toastBuySuccess("Teklif Gönderildi");
                  })
                  .catch((error) => {
                    console.log(error);
                  })
                  .finally(() => {
                    setLoading(false);
                  })
              : errorMsg();
          }}
        >
          {({ values, handleChange }) =>
            loading ? (
              <LoadingSpinner />
            ) : (
              <div className="sendOffer">
                <div className="offerTitle">
                  <div className="title">Teklif Ver</div>
                  <div className="closeOffer" onClick={onClose}>
                    <img src={closeModal} alt="Kapat" />
                  </div>
                </div>

                <div className="sendOfferProduct">
                  <div className="offerImg">
                    <img
                      src={
                        `${oneProduct.image}` === "null"
                          ? undifendProduct
                          : `${baseURL}${oneProduct?.image?.url}`
                      }
                      alt="Ürün resmi"
                    />
                    <div className="productName">{oneProduct.name}</div>
                  </div>
                  <div className="productPrice">{oneProduct.price} TL</div>
                </div>

                <Form className="sendOfferForm">
                  <label
                    className={`perCentDefaults ${
                      Number(values.perCent) === oneProduct.price * 0.2 &&
                      "activeRadio"
                    } `}
                  >
                    <Field
                      type="radio"
                      name="perCent"
                      value={`${oneProduct.price * 0.2}`}
                      onChange={handleChange}
                      onClick={clearInput}
                    />
                    %20’si Kadar Teklif Ver
                  </label>
                  <label
                    className={`perCentDefaults ${
                      Number(values.perCent) === oneProduct.price * 0.3 &&
                      "activeRadio"
                    } `}
                  >
                    <Field
                      type="radio"
                      name="perCent"
                      value={`${oneProduct.price * 0.3}`}
                      onChange={handleChange}
                      onClick={clearInput}
                    />
                    %30’u Kadar Teklif Ver
                  </label>
                  <label
                    className={`perCentDefaults ${
                      Number(values.perCent) === oneProduct.price * 0.4 &&
                      "activeRadio"
                    } `}
                  >
                    <Field
                      type="radio"
                      name="perCent"
                      value={`${oneProduct.price * 0.4}`}
                      onChange={handleChange}
                      onClick={clearInput}
                    />
                    %40'ı Kadar Teklif Ver
                  </label>

                  <label className="perCentCustom">
                    <Field
                      name="perCent"
                      type="number"
                      id="customPrice"
                      value={values.price}
                      onChange={handleChange}
                      min="1"
                      placeholder="Teklif Belirle"
                    />
                  </label>
                  <button className="offerSubmitBtn" type="submit">
                    {values.perCent
                      ? `${values.perCent} TL Onayla`
                      : "Teklif Verininiz"}
                  </button>
                </Form>
              </div>
            )
          }
        </Formik>
      </div>
    </>,
    document.getElementById("portal")
  );
}
