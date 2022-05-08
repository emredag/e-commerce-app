import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneProductContext from "../../contexts/OneProductContext";
import {
  fetchOneProduct,
  baseURL,
  fetchDeletOffer,
} from "../../services/Services";
import BuyModal from "./BuyModal";
import SendOffer from "./SendOffer";
import undifendProduct from "../../constants/images/undifendProduct.jpg";
import GetCookie from "../../hooks/getCookie";
import { toastSuccess } from "../../constants/Toastify";

function ProductDetail() {
  const { productId } = useParams();
  const [buyOpen, setBuyOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);

  const {
    oneProduct,
    setOneProduct,
    setLoading,
    setCurrentProduct,
    offers,
    setOffers,
  } = useContext(OneProductContext);

  useEffect(() => {
    setLoading(true);
    fetchOneProduct(productId)
      .then((response) => {
        setOneProduct(response.data);
        setOffers(response.data.offers);
      })
      .catch((error) => {
        setOneProduct();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const item = oneProduct;

  useEffect(() => {
    setCurrentProduct(productId);
  }, [productId]);

  let givenOffer;

  offers.map((item) => {
    if (item.users_permissions_user === Number(GetCookie("userId"))) {
      givenOffer = item;
    } else {
      return null;
    }
  });

  const deleteOffer = () => {
    fetchDeletOffer(givenOffer.id).then((response) => {
      fetchOneProduct(productId)
        .then((response) => {
          setOneProduct(response.data);
          setOffers(response.data.offers);
          setLoading(false);
        })
        .catch((error) => {
          setOneProduct();
        });

      toastSuccess("Teklif Geri Çekildi");
    });
  };

  return (
    <div className="productDetailPage">
      <div className="productDetailContainer">
        <div className="detailLeftSide">
          <div className="detailImage">
            <img
              src={
                `${item.image}` === "null"
                  ? undifendProduct
                  : `${baseURL}${item?.image?.url}`
              }
              alt="Ürün resmi"
            />
          </div>
        </div>

        <div className="detailRightSide">
          <div className="rightSideContainer">
            <div className="detailTitle">{item.name}</div>

            <div className="detailInfo">
              <div className="detailBox">
                <div className="detailBoxTitle">Marka:</div>
                {item.brand ? item.brand : "Bilinmiyor"}
              </div>
              <div className="detailBox">
                <div className="detailBoxTitle">Renk:</div>
                {item.color ? item.color : "Bilinmiyor"}
              </div>
              <div className="detailBox">
                <div className="detailBoxTitle">Kullanım Durumu:</div>
                {item.status ? item.status : "Bilinmiyor"}
              </div>
            </div>

            <div className="detailPrice">
              {item.price ? item.price : "Bilinmiyor"} TL
            </div>

            {givenOffer && givenOffer.isStatus === null && (
              <div className="givenOffer">
                <span>Verilen Teklif:</span> {givenOffer.offerPrice} TL
              </div>
            )}

            <div className="detailBtn">
              {!item.isSold && (
                <div className="buyModalBtn">
                  <button
                    className="btn btn-primary"
                    onClick={() => setBuyOpen(true)}
                  >
                    Satın Al
                  </button>

                  <BuyModal
                    open={buyOpen}
                    onClose={() => setBuyOpen(false)}
                    productId={productId}
                  ></BuyModal>
                </div>
              )}

              {item.isOfferable && !givenOffer && !item.isSold && (
                <div className="sendOfferBtn">
                  <button
                    className="btn btn-primary"
                    onClick={() => setOfferOpen(true)}
                  >
                    Teklif Ver
                  </button>

                  <SendOffer
                    open={offerOpen}
                    onClose={() => setOfferOpen(false)}
                    productId={productId}
                  ></SendOffer>
                </div>
              )}

              {givenOffer && givenOffer.isStatus === null && (
                <div className="sendOfferBtn">
                  <button className="btn btn-primary" onClick={deleteOffer}>
                    Teklifi Geri Çek
                  </button>
                </div>
              )}

              {item.isSold && (
                <div className="soldProduct">Bu Ürün Satışta Değil</div>
              )}

              {!item.isOfferable && !item.isSold && (
                <div className="soldProduct">Teklif Kabul Edilmiyor</div>
              )}
            </div>

            <div className="detailDesc">
              <div className="descTitle">Açıklama</div>
              {item.description ? item.description : "Açıklama bulunmamakta."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
