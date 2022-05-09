import React, { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toastError } from "../constants/Toastify";
import {
  fetchBrands,
  fetchCategories,
  fetchColors,
  fetchProducts,
  fetchStatus,
} from "../services/Services";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [status, setStatus] = useState([]);
  const [image, setImage] = useState();

  useEffect(() => {
    setLoading(true);

    // Brand
    fetchBrands()
      .then((response) => {
        setBrands(response.data);
      })
      .catch(() => {
        toastError("Markalar yüklenemedi");
      });
    // **********

    // Color
    fetchColors()
      .then((response) => {
        setColors(response.data);
      })
      .catch(() => {
        toastError("Renkler yüklenemedi");
      });
    // **********

    // Status
    fetchStatus()
      .then((response) => {
        setStatus(response.data);
      })
      .catch(() => {
        toastError("Kullanım durumları yüklenemedi");
      });
    // **********

    // Categories
    fetchCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch(() => {
        toastError("Kategoriler yüklenemedi");
      });
    // **********

    fetchCategories()
      .then((response) => {
        const categories = response.data;
        setAllCategories(categories);
      })
      .catch((error) => {
        console.log(error);
      });
    // **********

    // Products
    fetchProducts()
      .then((response) => {
        const product = response.data;
        setAllProduct(product);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    // **********
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const categoryID = queryParams.get("catagoryId");
    setCurrentCategory(categoryID ? Number(categoryID) : 0);
  }, [searchParams]);

  useEffect(() => {}, []);

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
    brands,
    setBrands,
    colors,
    setColors,
    status,
    setStatus,
    image,
    setImage,
    categories,
    setCategories,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
