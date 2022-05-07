import axios from "axios";

export const baseURL = "https://bootcamp.akbolat.net";

const URL = {
  register: "auth/local/register",
  login: "auth/local",
  product: "products",
  categories: "categories",
  offer: "offers",
  brands: "brands",
  color: "colors",
  status: "using-statuses",
};

export const fetchRegister = async (input) => {
  const data = await axios.post(`${baseURL}/${URL.register}`, input);
  return data;
};

export const fetchLogin = async (input) => {
  const data = await axios.post(`${baseURL}/${URL.login}`, input);
  return data;
};

export const fetchCategories = () => {
  const data = axios.get(`${baseURL}/${URL.categories}`);
  return data;
};

export const fetchProducts = async () => {
  const data = await axios.get(`${baseURL}/${URL.product}`);
  return data;
};

export const fetchOneProduct = async (productId) => {
  const data = await axios.get(`${baseURL}/${URL.product}/${productId}`);
  return data;
};

export const fetchBuyProduct = async (productId, input) => {
  const data = await axios.put(`${baseURL}/${URL.product}/${productId}`, input);
  return data;
};

export const fetchSendOffer = async (input) => {
  const data = await axios.post(`${baseURL}/${URL.offer}`, input);
  return data;
};

export const fetchDeletOffer = async (offerId) => {
  const data = await axios.delete(`${baseURL}/${URL.offer}/${offerId}`);
  return data;
};

export const fetchBrands = async () => {
  const data = await axios.get(`${baseURL}/${URL.brands}`);
  return data;
};

export const fetchColors = async () => {
  const data = await axios.get(`${baseURL}/${URL.color}`);
  return data;
};

export const fetchStatus = async () => {
  const data = await axios.get(`${baseURL}/${URL.status}`);
  return data;
};

export const fetchAddProduct = async (input) => {
  const data = await axios.post(`${baseURL}/${URL.product}`, input);
  return data;
};
