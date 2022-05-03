import React, { useContext, useEffect } from "react";
import { baseURL } from "../../services/Axios";
import undifendProduct from "../../constants/images/undifendProduct.jpg";
import { useParams } from "react-router-dom";
import OneProductContext from "../../contexts/OneProductContext";
import { fetchOneProduct } from "../../services/Services";

function ProductDetail() {
  const { productId } = useParams();

  const {
    oneProduct,
    setOneProduct,
    setLoading,

    setCurrentProduct,
  } = useContext(OneProductContext);

  useEffect(() => {
    setLoading(true);
    fetchOneProduct(productId)
      .then((response) => {
        setOneProduct(response.data);
      })
      .catch((error) => {
        setOneProduct();
      })
      .finally(setLoading(false));
  }, []);

  const item = oneProduct;

  useEffect(() => {
    setCurrentProduct(productId);
  }, [productId]);

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

            <div className="detailPrice">{item.price} TL</div>

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
