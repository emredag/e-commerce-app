import React, { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(0);
  let [searchParams, setSearchParams] = useSearchParams();

  const values = {
    allProduct,
    setAllProduct,
    allCategories,
    setAllCategories,
    currentCategory,
    setCurrentCategory,
    searchParams,
    setSearchParams,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
