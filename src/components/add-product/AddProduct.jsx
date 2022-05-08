import { Field, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import ProductContext from "../../contexts/ProductContext";
import GetCookie from "../../hooks/getCookie";
import {
  fetchAddProduct,
  fetchBrands,
  fetchCategories,
  fetchColors,
  fetchStatus,
} from "../../services/Services";
import "antd/dist/antd.css";
import { Upload, Button } from "antd";
import { toastError, toastSuccess } from "../../constants/Toastify";
import { useNavigate } from "react-router-dom";
import DragAndDropImg from "./DragAndDropImg";
import LoadingSpinner from "../global/LoadingSpinner";

function AddProduct() {
  const { brands, setBrands, colors, setColors, status, setStatus, image } =
    useContext(ProductContext);

  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchBrands()
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    fetchColors()
      .then((response) => {
        setColors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    fetchStatus()
      .then((response) => {
        setStatus(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    fetchCategories()
      .then((response) => {
        setAllCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // *********** Yup Validation ***********
  const validation = Yup.object({
    name: Yup.string()
      .max(100, "Maksimum 100 karakter girebilirsiniz")
      .required("Ürün adı zorunlu"),
    description: Yup.string()
      .max(500, "Maksimum 500 karakter girebilirsiniz")
      .required("Ürün açıklaması zorunlu"),
    category: Yup.number()
      .typeError("Katagori seçiniz")
      .required("Katagori zorunlu"),
    brand: Yup.string(),
    color: Yup.string(),
    status: Yup.string()
      .typeError("Kullanım durumu seçiniz")
      .required("Kullanım durumu zorunlu"),
    price: Yup.number()
      .typeError("0-9 Arasında Bir Rakam Girin")
      .required("Ürün fiyatı zorunlu"),
    isOfferable: Yup.boolean(),
  });
  // **************************************

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        category: "",
        brand: "",
        color: "",
        status: "",
        price: "",
        isOfferable: false,
      }}
      validationSchema={validation}
      onSubmit={(values) => {
        let data = {
          name: values.name,
          description: values.description,
          category: Number(values.category),
          brand: values.brand ? values.brand : null,
          color: values.color ? values.color : null,
          status: values.status,
          price: Number(values.price),
          isOfferable: values.isOfferable,
          isSold: false,
          users_permissions_user: Number(GetCookie("userId")),
        };

        const newData = new FormData();
        newData.append("data", JSON.stringify(data));
        newData.append("files.image", image);

        setLoading(true);

        const errorImg = () => {
          setLoading(false);
          toastError("Ürün görseli yükleyiniz!");
        };

        image
          ? fetchAddProduct(newData)
              .then((response) => {
                console.log(response.data);
                toastSuccess("Ürününüz yüklendi.");
                navigate(`/productId=${response.data.id}`);
                setLoading(false);
              })
              .catch((error) => {
                console.log(error);
                setLoading(false);
                toastError("Ürün yüklenemedi.");
              })
          : errorImg();
      }}
    >
      {({ values, errors, handleChange, handleSubmit, touched }) =>
        loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="uploadLeftSide">
              <div className="leftTitle">Ürün Detayları</div>
              <form className="uploadForm" action="" onSubmit={handleSubmit}>
                <div className="productName productInput">
                  <label className="productLabel" htmlFor="name">
                    Ürün Adı
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Örnek: Iphone 12 Pro Max"
                    value={values.name}
                    onChange={handleChange}
                    className={`${errors.name && "errorBorder"}`}
                  />
                  {touched && errors.name && (
                    <div className="errorMsg">{errors.name}</div>
                  )}
                </div>

                <div className="productDesc productInput">
                  <label className="productLabel" htmlFor="description">
                    Açıklama
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    placeholder="Ürün açıklamasını girin"
                    value={values.description}
                    onChange={handleChange}
                    className={`${errors.description && "errorBorder"}`}
                  />
                  {touched && errors.description && (
                    <div className="errorMsg">{errors.description}</div>
                  )}
                </div>

                <div className="smallInput">
                  <div className="productCategory productInput">
                    <label className="productLabel" htmlFor="category">
                      Kategori
                    </label>
                    <select
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      className={`${errors.category && "errorBorder"}`}
                    >
                      <option label="Kategori Seç" disabled />
                      {allCategories.map((item, index) => {
                        return (
                          <option
                            value={item.id}
                            key={index}
                            label={item.name}
                          />
                        );
                      })}
                    </select>
                    {touched && errors.category && (
                      <div className="errorMsg">{errors.category}</div>
                    )}
                  </div>

                  <div className="productBrand productInput">
                    <label className="productLabel" htmlFor="brand">
                      Marka
                    </label>
                    <select
                      name="brand"
                      value={values.brand}
                      onChange={handleChange}
                    >
                      <option label="Marka Seç" disabled />
                      {brands.map((item, index) => {
                        return (
                          <option
                            value={item.name}
                            key={index}
                            label={item.name}
                          />
                        );
                      })}
                    </select>
                    {touched && errors.brand && (
                      <div className="errorMsg">{errors.brand}</div>
                    )}
                  </div>

                  <div className="productColor productInput">
                    <label className="productLabel" htmlFor="color">
                      Renk
                    </label>
                    <select
                      name="color"
                      value={values.color}
                      onChange={handleChange}
                    >
                      <option label="Renk Seç" disabled />
                      {colors.map((item, index) => {
                        return (
                          <option
                            value={item.name}
                            key={index}
                            label={item.name}
                          />
                        );
                      })}
                    </select>
                    {touched && errors.color && (
                      <div className="errorMsg">{errors.color}</div>
                    )}
                  </div>

                  <div className="productStatus productInput">
                    <label className="productLabel" htmlFor="status">
                      Kullanım Durumu
                    </label>{" "}
                    <select
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      className={`${errors.status && "errorBorder"}`}
                    >
                      <option label="Kullanım Durumu Seç" disabled />
                      {status.map((item, index) => {
                        return (
                          <option
                            value={item.name}
                            key={index}
                            label={item.name}
                          />
                        );
                      })}
                    </select>
                    {touched && errors.status && (
                      <div className="errorMsg">{errors.status}</div>
                    )}
                  </div>
                </div>

                <div className="productPrice productInput">
                  <label className="productLabel" htmlFor="price">
                    Fiyat
                  </label>
                  <input
                    type="text"
                    placeholder="Bir fiyat girin"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    className={`${errors.price && "errorBorder"}`}
                  />
                  {errors.price && (
                    <div className="errorMsg">{errors.price}</div>
                  )}
                </div>

                <div className="productOfferable">
                  <label className="productLabel" htmlFor="isOfferable">
                    Teklif opsiyonu:
                  </label>
                  <Field
                    name="isOfferable"
                    className="tgl tgl-skewed"
                    id="cb3"
                    type="checkbox"
                  />
                  <label
                    className="tgl-btn"
                    data-tg-off="Kapalı"
                    data-tg-on="Açık"
                    htmlFor="cb3"
                  ></label>
                </div>

                <div className="productSubmit">
                  <button type="submit">Kaydet</button>
                </div>
              </form>
            </div>
            <div className="uploadRightSide">
              <div className="righTitle">Ürün Görseli</div>
              <div className="productImage">
                <DragAndDropImg />

                {/* {!image && <div className="errorBorder">Ürün görseli yüklemelisiniz</div>} */}
              </div>
            </div>
          </>
        )
      }
    </Formik>
  );
}

export default AddProduct;
