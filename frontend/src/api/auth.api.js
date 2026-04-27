import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function handleLogin(userData) {
  const res = await axios.post(`${BASE_URL}/api/auth/login`, userData);
  return res.data.data;
}

export async function handleRegister(userData) {
  await axios
    .post(`${BASE_URL}/api/auth/register`, userData)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export async function handleLogoutUser() {
  await axios
    .post(`${BASE_URL}/api/auth/logout`)
    .then()
    .catch((err) => {
      console.error(err);
    });
}
