import axios from "axios";

const BASE_URL = `http://localhost:3000/api`;

export async function updateProfile(data) {
  const res = await axios.patch(`${BASE_URL}/user/updateProfile`, {
    data: data,
  });
  return res;
}

export async function getCurrentUser() {
  const res = await axios.get(`${BASE_URL}/auth/currentUser`);
  return res.data.data;
}
