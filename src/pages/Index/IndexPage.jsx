import React, { useContext, useEffect, useState } from "react";
import banner from "../../constants/images/indexPageBanner.png";
import ProductContext from "../../contexts/ProductContext";
import CategoriesCard from "../../components/index/CategoriesCard";
import ProductCard from "../../components/index/ProductCard";

function IndexPage() {
  return (
    <div className="indexPage">
      <div className="indexContainer">
        <div className="indexBanner">
          <img src={banner} alt="Banner" />
        </div>

        <CategoriesCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default IndexPage;
