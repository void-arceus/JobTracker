import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getUserJobs() {
  const res = await axios.get(`${BASE_URL}/api/jobs/getJobs`);
  return res.data.data;
}

export async function addNewJob(jobData) {
  await axios
    .post(`${BASE_URL}/api/jobs/addJob`, jobData)
    .then()
    .catch((err) => {
      console.error(err);
    });
}

export async function updateJob(data) {
  const res = await axios.patch(`${BASE_URL}/api/jobs/updateJob`, { data });
  return res;
}

export async function deleteJob(id) {
  await axios
    .delete(`${BASE_URL}/api/jobs/deleteJob/${id}`)
    .then()
    .catch((err) => console.error(err));
}
