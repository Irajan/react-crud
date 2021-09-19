import axios from "axios";
import { apiUrl, endpoints } from "../config";

export async function login(formData) {
  try {
    const { data } = await axios.post(`${apiUrl}/${endpoints.login}`, formData);

    localStorage.setItem("accessToken", data.accessToken);
  } catch (err) {
    throw err.response.data;
  }
}
