import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/product-detail/ProductDetail";
import OneProductContext from "../../contexts/OneProductContext";
import { fetchOneProduct } from "../../services/Services";
import notFound from "../../constants/images/notFound.png";
import LoadingSpinner from "../../components/global/LoadingSpinner";

function ProductDetailPage() {
  const { oneProduct, loading, setLoading } =
    useContext(OneProductContext);

  return (
    <>
      {loading && <LoadingSpinner />}
      <div>
        {oneProduct ? (
          <ProductDetail />
        ) : (
          <>
            {setLoading(false)}
            <div className="notFoundProduct">
              <img src={notFound} alt="Ürün Bulunamadı" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ProductDetailPage;
