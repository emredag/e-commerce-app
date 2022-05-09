import React, { useContext } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import { toastBuySuccess, toastError } from "../../constants/Toastify";
import OneProductContext from "../../contexts/OneProductContext";
import GetCookie from "../../hooks/getCookie";
import { fetchBuyProduct, fetchOneProduct } from "../../services/Services";
import LoadingSpinner from "../global/LoadingSpinner";

export default function BuyModal({ open, onClose, productId }) {
  const { setOneProduct, loading, setLoading } = useContext(OneProductContext);

  const buyClick = () => {
    setLoading(true);
    onClose(false);
    fetchBuyProduct(productId, { isOfferable: false, isSold: true })
      .then(() => {
        fetchOneProduct(productId)
          .then((response) => {
            setOneProduct(response.data);
          })
          .catch((error) => {
            console.log(error);
          });

        toastBuySuccess("Satın Alındı");
        setLoading(false);
      })
      .catch((error) => {
        toastError("Giriş Yapmalısınız!");
        setLoading(false);
      });
  };

  const isLogin = GetCookie("login");

  if (!open) return null;

  return ReactDom.createPortal(
    loading ? (
      <LoadingSpinner />
    ) : (
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
      </>
    ),
    document.getElementById("portal")
  );
}
