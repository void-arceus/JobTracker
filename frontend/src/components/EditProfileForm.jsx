import { updateProfile } from "../api/user.api.js";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Animations/Spinner";
import { useToast } from "../context/ToastContext";

const BASE_URL = import.meta.env.VITE_API_URL;

function EditProfileForm({ handleShowForm }) {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    getUserData();
  }, []);

  function getUserData() {
    axios
      .get(`${BASE_URL}/api/auth/currentUser`)
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((err) => {
        showToast("Something went wrong!", "error");
      });
  }

  async function handleUpdateProfile(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      await updateProfile(userData);
      getUserData();
      showToast("Profile Updated!", "success");
      setTimeout(() => {
        handleShowForm();
      }, 300);
    } catch (err) {
      setIsLoading(false);
      showToast("Something went wrong!", "error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="h-full max-w-2xl mx-auto bg-white/15 backdrop-blur-xl border border-gray-300 rounded-2xl shadow-xl p-6 flex flex-col gap-6">
      <h2 className="text-center text-lg font-semibold text-gray-900">
        Edit Profile
      </h2>
      <form
        onSubmit={handleUpdateProfile}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-700">Username</label>
          <input
            type="text"
            value={userData.username !== undefined ? userData.username : ""}
            onChange={(e) => {
              setUserData({ ...userData, username: e.target.value });
            }}
            placeholder="username"
            className="bg-white/30 border border-gray-300 text-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-700">Email</label>
          <input
            type="email"
            value={userData.email !== undefined ? userData.email : ""}
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
            placeholder="Email"
            className="bg-white/30 border border-gray-300 text-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-700">Location</label>
          <input
            type="text"
            value={userData.location !== undefined ? userData.location : ""}
            onChange={(e) => {
              setUserData({ ...userData, location: e.target.value });
            }}
            placeholder="username"
            className="bg-white/30 border border-gray-300 text-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-700">Role</label>
          <input
            type="text"
            value={userData.role !== undefined ? userData.role : ""}
            onChange={(e) => {
              setUserData({ ...userData, role: e.target.value });
            }}
            placeholder="username"
            className="bg-white/30 border border-gray-300 text-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none"
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-1">
          <label className="text-xs text-gray-700">About</label>
          <textarea
            type="text"
            rows="3"
            value={userData.about !== undefined ? userData.about : ""}
            onChange={(e) => {
              setUserData({ ...userData, about: e.target.value });
            }}
            className="bg-white/30 border border-gray-300 text-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none"
          />
        </div>
        <div className="col-span-full flex justify-end gap-3">
          <button
            type="button"
            onClick={() => {
              handleShowForm();
            }}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md shadow-purple-500/30 cursor-pointer"
          >
            {isLoading ? <Spinner isLoading={isLoading} /> : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfileForm;
