import axios from "axios";

const BASE_URL = `http://localhost:3000/api`;

export async function handleLogin(userData) {
  const res = await axios.post(`${BASE_URL}/auth/login`, userData);
  return res.data.data;
}

export async function handleRegister(userData) {
  await axios
    .post(`${BASE_URL}/auth/register`, userData)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export async function handleLogoutUser() {
  await axios
    .post(`${BASE_URL}/auth/logout`)
    .then()
    .catch((err) => {
      console.error(err);
    });
}
