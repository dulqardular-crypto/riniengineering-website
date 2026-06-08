import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const submitQuote = async (payload) => {
  const res = await axios.post(`${API}/quotes`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};
