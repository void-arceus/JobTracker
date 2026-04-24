import axios from "axios";

const BASE_URL = `http://localhost:3000/api`;

export async function getUserJobs() {
  const res = await axios.get(`${BASE_URL}/jobs/getJobs`);
  return res.data.data;
}

export async function addNewJob(jobData) {
  await axios
    .post(`${BASE_URL}/jobs/addJob`, jobData)
    .then()
    .catch((err) => {
      console.error(err);
    });
}

export async function updateJob(data) {
  const res = await axios.patch(`${BASE_URL}/jobs/updateJob`, { data });
  return res;
}

export async function deleteJob(id) {
  axios
    .delete(`${BASE_URL}/jobs/deleteJob/${id}`)
    .then()
    .catch((err) => console.error(err));
}
