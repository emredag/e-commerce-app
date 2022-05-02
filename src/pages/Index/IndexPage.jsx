import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../contexts/ProductContext";
import CategoriesCard from "../../components/index/CategoriesCard";
import ProductCard from "../../components/index/ProductCard";
import banner from "../../constants/images/indexPageBanner.png";

function IndexPage() {
  const { loading } = useContext(ProductContext);

  return (
    <>
      {loading && (
        <div className="loadingContainer">
          <span className="loading"></span>
          <p>Yükleniyor...</p>
        </div>
      )}
      <div className="indexPage">
        <div className="indexContainer">
          <div className="indexBanner">
            <img src={banner} alt="Banner" />
          </div>

          <CategoriesCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}

export default IndexPage;
