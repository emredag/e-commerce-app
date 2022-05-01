import axios, { URL } from "./Axios";

export const fetchRegister = async (input) => {
  const data = await axios.post(URL.register, input);
  return data;
};

export const fetchLogin = async (input) => {
  const data = await axios.post(URL.login, input);
  return data;
};

export const fetchProducts = async () => {
  const data = await axios.get(URL.product);
  return data;
};

export const fetchCategories = () => {
  const data = axios.get(URL.categories);
  return data;
};
