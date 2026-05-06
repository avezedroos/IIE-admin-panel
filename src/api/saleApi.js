// src/api/saleApi.js
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/sales";

export const getAllSales = async () => {
  const res = await axios.get(`${BASE_URL}/`);
  return res.data;
};