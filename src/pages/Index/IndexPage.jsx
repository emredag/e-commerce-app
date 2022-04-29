import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/Services";
import banner from "../../constants/images/indexPageBanner.png";
import { baseURL } from "../../services/Axios";

function IndexPage() {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    fetchProducts().then((res) => {
      const product = res.data;
      setAllProduct(product);
    });
  }, []);

  console.log(allProduct);

  return (
    <div className="indexPage">
      <div className="indexContainer">
        <div className="indexBanner">
          <img src={banner} alt="Banner" />
        </div>
        <div className="indexCatagories"></div>

        <div className="indexProducts">
          {allProduct.map((item, index) => {
            return (
              <div className="productCard" key={index}>
                <div className="productImg">
                  <img src={`${baseURL}${item.image.url}`} alt="Ürün resmi" />
                </div>
                <div className="productInfo">
                  <div className="productBrand">{item.brand}</div>
                  <div className="productColor">
                    <span>Renk:</span> {item.color}
                  </div>
                </div>
                <div className="productPrice">{item.price} TL</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
