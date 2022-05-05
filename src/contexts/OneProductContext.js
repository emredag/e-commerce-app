import { createContext, useState } from "react";

const OneProductContext = createContext();

export const OneProductProvider = ({ children }) => {
  const [oneProduct, setOneProduct] = useState({});
  const [currentProduct, setCurrentProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [offers, setOffers] = useState([]);

  const values = {
    oneProduct,
    setOneProduct,
    currentProduct,
    setCurrentProduct,
    loading,
    setLoading,
    offers,
    setOffers,
  };

  return (
    <OneProductContext.Provider value={values}>
      {children}
    </OneProductContext.Provider>
  );
};

export default OneProductContext;
