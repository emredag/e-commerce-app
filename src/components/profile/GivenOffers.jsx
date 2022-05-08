import React, { useEffect, useState } from "react";
import GetCookie from "../../hooks/getCookie";
import {
  baseURL,
  fetchBuyProduct,
  fetchDeletOffer,
  fetchUserOffers,
} from "../../services/Services";
import LoadingSpinner from "../global/LoadingSpinner";
import undifendProduct from "../../constants/images/undifendProduct.jpg";
import { useNavigate } from "react-router-dom";
import {
  toastBuySuccess,
  toastError,
  toastSuccess,
} from "../../constants/Toastify";

function GivenOffers() {
  const [userOffers, setUserOffers] = useState([]);
  const [loading, setLoading] = useState(false);

  const userId = GetCookie("userId");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserOffers(userId).then((response) => {
      setUserOffers(response.data);
    });
  }, []);

  const buyClick = (id) => {
    fetchBuyProduct(id, { isOfferable: false, isSold: true })
      .then(() => {
        fetchUserOffers(userId).then((response) => {
          setUserOffers(response.data);
        });

        toastBuySuccess("Satın Alındı");
      })
      .catch((error) => {
        toastError("Bir hata oluştu!");
      });
  };

  const deleteOffer = (id) => {
    fetchDeletOffer(id).then((response) => {
      fetchUserOffers(userId).then((response) => {
        setUserOffers(response.data);
        toastSuccess("Teklif Geri Çekildi");
      });
    });
  };

  return userOffers.map((item) => {
    return (
      item.product && (
        <div key={item.id} className="productCard">
          <div className="productInfo">
            <div className="productImg">
              <img
                src={
                  `${item?.product?.image}` === "null"
                    ? undifendProduct
                    : `${baseURL}${item?.product?.image?.url}`
                }
                alt="Ürün resmi"
                onClick={() => {
                  navigate(`/productId=${item.product.id}`);
                }}
              />
            </div>

            <div className="productName">
              <div className="name">{item.product.name}</div>

              <div className="offerPrice">
                Verilen teklif: <span>{item.offerPrice} TL</span>
              </div>
            </div>
          </div>

          <div className="offerStatus">
            {item.isStatus === null && !item.product.isSold && (
              <div className="offerAccepted">Satıcıdan cevap bekleniyor</div>
            )}

            {item.isStatus === true && !item.product.isSold && (
              <div className="offerBtns">
                <div
                  className="acceptOffer"
                  onClick={() => {
                    buyClick(item.product.id);
                  }}
                >
                  Satın Al
                </div>
                <div
                  className="acceptOffer"
                  onClick={() => {
                    deleteOffer(item.id);
                  }}
                >
                  Vazgeç
                </div>
                <div className="offerAccepted">Onaylandı</div>
              </div>
            )}

            {item.product.isSold && item.isStatus && (
              <div className="offerAccepted">Satın alındı</div>
            )}

            {item.isStatus === false && (
              <div className="offerRejected">Reddedildi</div>
            )}
          </div>
        </div>
      )
    );
  });
}

export default GivenOffers;
