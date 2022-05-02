import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/product-detail/ProductDetail";
import OneProductContext from "../../contexts/OneProductContext";
import { fetchOneProduct } from "../../services/Services";
import notFound from "../../constants/images/notFound.png";

function ProductDetailPage() {
  const { productId } = useParams();

  const {
    oneProduct,
    setOneProduct,
    currentProduct,
    setCurrentProduct,
    loading,
    setLoading,
  } = useContext(OneProductContext);

  useEffect(() => {
    setLoading(true);
    fetchOneProduct(productId)
      .then((response) => {
        setOneProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setCurrentProduct(productId);
  }, []);

  return (
    <>
      {loading && (
        <div className="loadingContainer">
          <span className="loading"></span>
          <p>Yükleniyor...</p>
        </div>
      )}
      <div>
        {[oneProduct].map((item, index) => {
          if (currentProduct == item.id) {
            return <ProductDetail item={item} index={index} />;
          } else {
            return (
              <div className="notFoundProduct">
                <img src={notFound} alt="Ürün Bulunamadı" />
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default ProductDetailPage;
