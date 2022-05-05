import React, { useContext, useEffect } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import { toastBuySuccess, toastError } from "../../constants/Toastify";
import OneProductContext from "../../contexts/OneProductContext";
import GetCookie from "../../hooks/getCookie";
import {
  fetchBuyProduct,
  fetchOneProduct,
  fetchProducts,
} from "../../services/Services";

export default function BuyModal({ open, onClose, productId }) {
  const { setOneProduct } = useContext(OneProductContext);

  const buyClick = () => {
    fetchBuyProduct(productId, { isOfferable: false, isSold: true })
      .then(() => {
        onClose(false);

        fetchOneProduct(productId)
          .then((response) => {
            setOneProduct(response.data);
          })
          .catch((error) => {
            console.log(error);
          });

        toastBuySuccess("Satın Alındı");
      })
      .catch((error) => {
        toastError("Giriş Yapmalısınız!");
      });
  };

  // // !onClose && toastBuySuccess("Satın Alındı");

  const isLogin = GetCookie("login");

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="buy-overlay" />
      <div className="buy-modals">
        <div className="buyTitle">
          <span>Satın Al</span>
          Satın almak istiyor musunuz?
        </div>

        <div className="buyButtons">
          <div className="closeBuy" onClick={onClose}>
            Vazgeç
          </div>

          <Link className="buyProduct" to={!isLogin && "/register"}>
            <div
              onClick={() => {
                buyClick();
              }}
            >
              Satın Al
            </div>
          </Link>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
