import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastError = (message) => {
  return toast.error(message, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    transition: Flip,
  });
};

export const toastSuccess = (message) => {
  return toast.success(message, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    transition: Flip,
  });
};

export const toastBuySuccess = (message) => {
  return toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    transition: Flip,
  });
};
