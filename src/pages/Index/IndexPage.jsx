import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import CategoriesCard from "../../components/index/CategoriesCard";
import ProductCard from "../../components/index/ProductCard";
import LoadingSpinner from "../../components/global/LoadingSpinner";
import GetNewProduct from "../../components/index/GetNewProduct";

function IndexPage() {
  const { loading } = useContext(ProductContext);

  return (
    <>
      {loading && <LoadingSpinner />}
      <div className="indexPage">
        <div className="indexContainer">
          <div className="indexBanner">
            <img src="https://i.hizliresim.com/2ywnoxp.png" alt="Banner" />
          </div>

          <CategoriesCard />

          <ProductCard />

          <GetNewProduct />
        </div>
      </div>
    </>
  );
}

export default IndexPage;
