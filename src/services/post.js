import axios from "axios";
import { apiUrl, endpoints } from "../config";

async function fetch() {
  try {
    const headers = {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };

    const { data } = await axios.get(`${apiUrl}/${endpoints.posts}`, {
      headers,
    });

    return data;
  } catch ({ response }) {
    throw response.data;
  }
}

async function add(post) {
  try {
    const headers = {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };
    const { data } = await axios.post(`${apiUrl}/${endpoints.posts}`, post, {
      headers,
    });
    return data;
  } catch ({ response }) {
    throw response.data;
  }
}

async function update(id, payload) {
  try {
    const headers = {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };
    await axios.patch(`${apiUrl}/${endpoints.posts}/${id}`, payload, {
      headers,
    });
  } catch ({ response }) {
    throw response.data;
  }
}

async function remove(id) {
  try {
    const headers = {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };
    await axios.delete(`${apiUrl}/${endpoints.posts}/${id}`, { headers });
  } catch ({ response }) {
    throw response.data;
  }
}

export { fetch, add, update, remove };
