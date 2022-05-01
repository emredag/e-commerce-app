import React, { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(0);

  const values = {
    allProduct,
    setAllProduct,
    allCategories,
    setAllCategories,
    currentCategory,
    setCurrentCategory,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
