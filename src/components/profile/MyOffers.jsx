import React, { useEffect, useState } from "react";
import GetCookie from "../../hooks/getCookie";
import {
  baseURL,
  fetchAcceptOffer,
  fetchDeleteProduct,
  fetchUserProducts,
} from "../../services/Services";
import undifendProduct from "../../constants/images/undifendProduct.jpg";
import { toastError, toastSuccess } from "../../constants/Toastify";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../global/LoadingSpinner";
import deletIcon from "../../constants/icons/delete.png";

function MyOffers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userId = GetCookie("userId");

  useEffect(() => {
    fetchUserProducts(userId)
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        toastError("Bir sorunla karşılaşıldı");
      });
  }, []);

  const deleteProduct = (id) => {
    fetchDeleteProduct(id)
      .then(() => {
        fetchUserProducts(userId)
          .then((response) => {
            setProducts(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
            toastError("Bir sorunla karşılaşıldı");
          });
        toastSuccess("Ürün silindi");
      })
      .catch(() => {
        toastError("Hata oldu, sonra tekrar dene!");
      });
  };

  const acceptOffer = (id) => {
    fetchAcceptOffer(
      id,
      JSON.stringify({
        isStatus: true,
      })
    )
      .then(() => {
        fetchUserProducts(userId)
          .then((response) => {
            setProducts(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
            toastError("Bir sorunla karşılaşıldı");
          });
      })
      .catch((error) => {
        console.log(error);
        toastError("Bir hata oluştu lütfen daha sonra tekrar deneyin");
      });
  };

  const rejectOffer = (id) => {
    fetchAcceptOffer(
      id,
      JSON.stringify({
        isStatus: false,
      })
    )
      .then(() => {
        fetchUserProducts(userId)
          .then((response) => {
            setProducts(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
            toastError("Bir sorunla karşılaşıldı");
          });
      })
      .catch((error) => {
        console.log(error);
        toastError("Bir hata oluştu lütfen daha sonra tekrar deneyin");
      });
  };

  return loading ? (
    <LoadingSpinner />
  ) : (
    <>
      {products.map((item) => {
        if (item.offers.length > 0) {
          return item.offers.map((offer) => {
            return (
              <div key={offer.id} className="productCard">
                <div className="productInfo">
                  <div className="productImg">
                    <img
                      src={
                        `${item.image}` === "null"
                          ? undifendProduct
                          : `${baseURL}${item?.image?.url}`
                      }
                      alt="Ürün resmi"
                      onClick={() => {
                        navigate(`/productId=${item.id}`);
                      }}
                    />
                  </div>

                  <div className="productName">
                    <div className="name">
                      {item.name}{" "}
                      <img
                        src={deletIcon}
                        alt="Ürünü Sil"
                        onClick={() => {
                          deleteProduct(item.id);
                        }}
                      />
                    </div>

                    <div className="offerPrice">
                      Alınan teklif: <span>{offer.offerPrice} TL</span>
                    </div>
                  </div>
                </div>

                <div className="offerStatus">
                  {offer.isStatus === null && !item.isSold && (
                    <div className="offerBtns">
                      <div
                        className="acceptOffer"
                        onClick={() => {
                          acceptOffer(offer.id);
                        }}
                      >
                        Onayla
                      </div>
                      <div
                        className="rejectOffer"
                        onClick={() => {
                          rejectOffer(offer.id);
                        }}
                      >
                        Reddet
                      </div>
                    </div>
                  )}

                  {offer.isStatus === true && !item.isSold && (
                    <div className="offerAccepted">Onaylandı</div>
                  )}

                  {item.isSold && <div className="offerAccepted">Satıldı</div>}

                  {offer.isStatus === false && (
                    <div className="offerRejected">Reddedildi</div>
                  )}
                </div>
              </div>
            );
          });
        } else if (item.offers.length === 0) {
          return (
            <div key={item.id} className="productCard">
              <div className="productInfo">
                <div className="productImg">
                  <img
                    src={
                      `${item.image}` === "null"
                        ? undifendProduct
                        : `${baseURL}${item?.image?.url}`
                    }
                    alt="Ürün resmi"
                    onClick={() => {
                      navigate(`/productId=${item.id}`);
                    }}
                  />
                </div>

                <div className="productName">
                  <div className="name">
                    {item.name}{" "}
                    <img
                      src={deletIcon}
                      alt="Ürünü Sil"
                      onClick={() => {
                        deleteProduct(item.id);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="offerStatus">
                {item.offers.length === 0 &&
                  !item.isSold &&
                  item.isOfferable && (
                    <div className="noOffer">Henüz teklif yok</div>
                  )}

                {!item.isOfferable && !item.isSold && (
                  <div className="notOfferable">
                    Teklife kapalı, yalnızca satılabilir
                  </div>
                )}

                {item.isSold && <div className="offerAccepted">Satıldı</div>}
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default MyOffers;
