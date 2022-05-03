import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

const OneProductContext = createContext();

export const OneProductProvider = ({ children }) => {
  const [oneProduct, setOneProduct] = useState({});
  const [currentProduct, setCurrentProduct] = useState();
  const [loading, setLoading] = useState(false);

  const values = {
    oneProduct,
    setOneProduct,
    currentProduct,
    setCurrentProduct,
    loading,
    setLoading,
  };

  return (
    <OneProductContext.Provider value={values}>
      {children}
    </OneProductContext.Provider>
  );
};

export default OneProductContext;
