import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditProfileForm from "./EditProfileForm";
import { getCurrentUser } from "../api/user.api.js";
import { handleLogoutUser } from "../api/auth.api.js";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import Spinner from "../Animations/Spinner";

function Profile() {
  const [showForm, setShowForm] = useState(false);
  const [currUser, setCurrUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    handleGetCurrentUser();
  }, [showForm]);

  async function handleGetCurrentUser() {
    try {
      const res = await getCurrentUser();
      setCurrUser(res);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleShowForm() {
    setShowForm((prev) => !prev);
  }

  async function LogoutUser() {
    try {
      setIsLoading(true);
      await handleLogoutUser();
      logout();
      showToast("Logged Out!", "success");
      navigate("/login");
    } catch (err) {
      setIsLoading(false);
      showToast("Something went wrong", "error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="min-h-screen w-full px-2 pb-16 lg:pt-20 pt-5 flex flex-col items-center gap-4">
      <div className="w-full text-center">
        <h1 className="text-xl font-bold text-gray-800">Profile</h1>
      </div>
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner isLoading={isLoading} />
        </div>
      ) : (
        <div className="w-full">
          {showForm ? (
            <div className="w-full h-full">
              <EditProfileForm handleShowForm={handleShowForm} />
            </div>
          ) : (
            <div className="h-full max-w-2xl mx-auto bg-white/15 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col gap-6">
              <div className="flex items-center gap-5">
                <div className="h-14 w-14 rounded-full bg-white/30 flex items-center justify-center text-lg font-semibold text-gray-900">
                  {currUser.username?.[0]?.toUpperCase() || "U"}
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {currUser.username || "n/a"}
                  </h2>
                  <p className="text-sm text-gray-700">
                    {currUser.email || ""}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-3 flex flex-col">
                  <span className="text-xs text-gray-600">Location</span>
                  <span className="text-sm font-medium text-gray-900">
                    {currUser.location || "Not specified"}
                  </span>
                </div>
                <div className="bg-white/20 rounded-lg p-3 flex flex-col">
                  <span className="text-xs text-gray-600">Role</span>
                  <span className="text-sm font-medium text-gray-900">
                    {currUser.role || "Not specified"}
                  </span>
                </div>
                <div className="md:col-span-2 bg-white/20 rounded-lg p-3">
                  <span className="text-xs text-gray-600">About</span>
                  <p className="text-sm text-gray-900 mt-1">
                    {currUser.about || "No description"}
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={LogoutUser}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 text-gray-800 rounded-lg cursor-pointer"
                >
                  {isLoading ? <Spinner isLoading={isLoading} /> : "Logout"}
                </button>
                <button
                  onClick={handleShowForm}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md shadow-purple-500/30 cursor-pointer"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Profile;
