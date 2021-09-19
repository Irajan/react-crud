import axios from "axios";
import { apiUrl, endpoints } from "../config";

async function fetch() {
  try {
    const headers = {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };

    const { data } = await axios.get(`${apiUrl}/${endpoints.users}`, {
      headers,
    });
    return data;
  } catch ({ response }) {
    throw response.data;
  }
}

async function add(data) {
  try {
    const headers = {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };
    await axios.post(`${apiUrl}/${endpoints.users}`, data, { headers });
  } catch ({ response }) {
    console.log(response);
    throw response.data;
  }
}

async function update(id, payload) {
  try {
    const headers = {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };
    await axios.patch(`${apiUrl}/${endpoints.users}/${id}`, payload, {
      headers,
    });
  } catch ({ response }) {
    console.log(response);
    throw response.data;
  }
}

async function remove(id) {
  try {
    const headers = {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };
    await axios.delete(`${apiUrl}/${endpoints.users}/${id}`, { headers });
  } catch ({ response }) {
    console.log(response);
    throw response.data;
  }
}

export { fetch, add, update, remove };
