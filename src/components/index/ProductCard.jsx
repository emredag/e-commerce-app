import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import undifendProduct from "../../constants/images/undifendProduct.jpg";
import ProductContext from "../../contexts/ProductContext";
import { fetchProducts, baseURL } from "../../services/Services";

function ProductCard() {
  const { allProduct, currentCategory, setAllProduct, loading, setLoading } =
    useContext(ProductContext);

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((response) => {
        const product = response.data;
        setAllProduct(product);
        setLoading(false);
        console.log(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const product = (item, index) => {
    return (
      <div className="productCard" key={index}>
        <Link to={`product/${item.id}`}>
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
        </Link>

        <div className="productInfo">
          <div className="productBrand">
            {item.brand ? item.brand : "Marka Bilinmiyor"}
          </div>
          <div className="productColor">
            <span>Renk:</span> {item.color ? item.color : "Bilinmiyor"}
          </div>
        </div>
        <div className="productPrice">{item.price} TL</div>
      </div>
    );
  };

  return (
    <div className="indexProducts">
      {allProduct.map((item, index) => {
        if (currentCategory == item.category?.id) {
          return product(item, index);
        } else if (currentCategory == 0) {
          return product(item, index);
        }
      })}
    </div>
  );
}

export default ProductCard;
