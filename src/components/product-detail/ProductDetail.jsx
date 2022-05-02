import React from "react";
import { baseURL } from "../../services/Axios";
import undifendProduct from "../../constants/images/undifendProduct.jpg";

function ProductDetail(props) {
  const item = props.item;
  const key = props.index;

  return (
    <div className="productDetailPage" key={key}>
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
              <div>
                <span>Marka:</span> {item.brand}
              </div>
              <div>
                <span>Renk:</span> {item.color}
              </div>
              <div>
                <span>Kullanım Durumu:</span> {item.status}
              </div>
            </div>

            <div className="detailPrice">{item.price} TL</div>

            <div className="detailDesc">
              <span>Açıklama</span> <br />
              {item.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
