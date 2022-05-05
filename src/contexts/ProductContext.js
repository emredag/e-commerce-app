import React, { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const values = {
    allProduct,
    setAllProduct,
    allCategories,
    setAllCategories,
    currentCategory,
    setCurrentCategory,
    searchParams,
    setSearchParams,
    loading,
    setLoading,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
