import { useState, useEffect } from "react";
import EditProfileForm from "./EditProfileForm";
import { getCurrentUser } from "../api/user.api.js";

function Profile() {
  const [showForm, setShowForm] = useState(false);
  const [currUser, setCurrUser] = useState({});

  useEffect(() => {
    handleGetCurrentUser();
  }, [showForm]);

  async function handleGetCurrentUser() {
    try {
      const res = await getCurrentUser();
      setCurrUser(res);
    } catch (err) {
      console.error(err);
    }
  }

  function handleShowForm() {
    setShowForm((prev) => !prev);
  }

  return (
    <section className="min-h-screen w-full bg-slate-800 p-2 lg:pt-16">
      <div className="p-2 w-full flex flex-col items-start gap-4">
        <h1 className="text-slate-200 text-2xl md:text-4xl font-semibold">
          Profile
        </h1>

        {showForm ? (
          <EditProfileForm handleShowForm={handleShowForm} />
        ) : (
          <div className="w-full flex flex-col items-start gap-2 text-slate-200">
            <div className="flex items-center gap-3">
              <h1 className="text-md font-bold">Name:</h1>
              <p>
                {currUser.username !== undefined ? currUser.username : "n/a"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-md font-bold">Email:</h1>
              <p>{currUser.email !== undefined ? currUser.email : ""}</p>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-md font-bold">Location:</h1>
              <p>{currUser.location !== undefined ? currUser.location : ""}</p>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-md font-bold">Role:</h1>
              <p>{currUser.role !== undefined ? currUser.role : ""}</p>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-md font-bold">About:</h1>
              <p>{currUser.about !== undefined ? currUser.about : ""}</p>
            </div>
            <button
              onClick={handleShowForm}
              className="w-40 p-2 bg-linear-to-r from-violet-500 to-fuchsia-500 rounded-lg font-medium hover:cursor-pointer hover:bg-violet-600 shadow-sm hover:shadow-lg shadow-violet-900"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Profile;
