import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import undifendProduct from "../../constants/images/undifendProduct.jpg";
import ProductContext from "../../contexts/ProductContext";
import { baseURL } from "../../services/Services";

function ProductCard() {
  const { allProduct, currentCategory } = useContext(ProductContext);

  // Product Card
  const product = (item, index) => {
    return (
      <div className="productCard" key={index}>
        <Link to={`productId=${item.id}`}>
          <div className="productImg">
            <img
              src={
                `${item.image}` === "null"
                  ? undifendProduct
                  : `${baseURL}${item?.image?.url}`
              }
              alt="Ürün resmi"
            />
          </div>

          <div className="productInfo">
            <div className="productBrand">
              {item.brand ? item.brand : "Marka Bilinmiyor"}
            </div>
            <div className="productColor">
              <span>Renk:</span> {item.color ? item.color : "Bilinmiyor"}
            </div>
          </div>
          <div className="productPrice">{item.price} TL</div>
        </Link>
      </div>
    );
  };
  // *************

  return (
    <div className="indexProducts">
      {allProduct.map((item, index) => {
        if (currentCategory === item.category?.id) {
          return product(item, index);
        } else if (currentCategory === 0) {
          return product(item, index);
        }
      })}
    </div>
  );
}

export default ProductCard;
