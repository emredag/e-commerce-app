import { createContext, useState } from "react";

const OneProductContext = createContext();

export const OneProductProvider = ({ children }) => {
  const [oneProduct, setOneProduct] = useState({});
  const [currentProduct, setCurrentProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [isSentOffer, setIsSentOffer] = useState(false);

  const values = {
    oneProduct,
    setOneProduct,
    currentProduct,
    setCurrentProduct,
    loading,
    setLoading,
    isSentOffer,
    setIsSentOffer,
  };

  return (
    <OneProductContext.Provider value={values}>
      {children}
    </OneProductContext.Provider>
  );
};

export default OneProductContext;
