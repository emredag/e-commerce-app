import React, { useContext } from "react";
import ProductDetail from "../../components/product-detail/ProductDetail";
import OneProductContext from "../../contexts/OneProductContext";
import notFound from "../../constants/images/notFound.png";
import LoadingSpinner from "../../components/global/LoadingSpinner";

function ProductDetailPage() {
  const { oneProduct, loading, setLoading } = useContext(OneProductContext);

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
