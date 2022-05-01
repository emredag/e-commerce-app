import axios from "axios";

export const baseURL = "https://bootcamp.akbolat.net";
export default axios.create({ baseURL });

export const URL = {
  register: "/auth/local/register",
  login: "/auth/local",
  product: "/products",
  categories: "/categories",
};
