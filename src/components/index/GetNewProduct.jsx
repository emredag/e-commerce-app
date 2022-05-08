import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../contexts/ProductContext";
import { fetchProducts } from "../../services/Services";

function GetNewProduct() {
  const [productLimit, setProductLimit] = useState(20);

  const { allProduct, setAllProduct } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts(productLimit)
      .then((res) => {
        setAllProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productLimit]);
  return (
    <>
      {allProduct.length > productLimit - 1 && (
        <div className="getNewProduct d-flex justify-content-center">
          <button
            onClick={() => {
              setProductLimit(productLimit + 20);
              console.log(productLimit);
            }}
            className="btn btn-primary w-25 mt-5"
          >
            Daha fazla yükle..
          </button>
        </div>
      )}
    </>
  );
}

export default GetNewProduct;
