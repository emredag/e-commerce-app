import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Upload, Button } from "antd";
import addProductIcon from "../../constants/icons/dragDrop.png";
import ProductContext from "../../contexts/ProductContext";
import { toastError } from "../../constants/Toastify";

function DragAndDropImg() {
  const { Dragger } = Upload;

  const dragAndDrop = {
    multiple: false,
    listType: "picture",
    accept: ".png,.jpg,.jpeg",
  };

  const { image, setImage } = useContext(ProductContext);
  return (
    <Dragger
      beforeUpload={(img) => {
        if (img.size < 409600) {
          setImage(img);
        } else {
          return toastError("400 kB'dan büyük resim yüklenemez!");
        }
        return false;
      }}
      {...dragAndDrop}
      className={`uploadBox ${!image && "imageError"}`}
    >
      <img src={addProductIcon} alt="Ürün Yükle" />
      <p className="uploadTitle">Sürükleyip bırakarak yükle</p>
      <p className="dragOrSelect">veya</p>
      <Button className="uploadImage">Görsel Seçin</Button>
      <p className="fileType">PNG ve JPEG Dosya boyutu: max. 400kb</p>
    </Dragger>
  );
}

export default DragAndDropImg;
