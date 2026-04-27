import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function updateProfile(data) {
  const res = await axios.patch(`${BASE_URL}/api/user/updateProfile`, {
    data: data,
  });
  return res;
}

export async function getCurrentUser() {
  const res = await axios.get(`${BASE_URL}/api/auth/currentUser`);
  return res.data.data;
}
