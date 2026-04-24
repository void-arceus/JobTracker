import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Jobs from "./Jobs";
import Profile from "./Profile";
import AddForm from "./AddForm";
import SideBar from "./SideBar";
import { useNav } from "../context/NavContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Spinner from "../Animations/Spinner";

function Main() {
  const { currTab } = useNav();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return isLoggedIn ? (
    <main className="h-screen w-full">
      <Navbar />
      <div className="w-full h-full flex items-center">
        <SideBar />
        {currTab === "dashboard" ? (
          <Dashboard />
        ) : currTab === "jobs" ? (
          <Jobs />
        ) : currTab === "add" ? (
          <AddForm />
        ) : currTab === "profile" ? (
          <Profile />
        ) : null}
      </div>
    </main>
  ) : (
    <div className="h-screen w-full bg-slate-900 flex items-center justify-center">
      <div className="text-slate-200  w-full max-w-md flex flex-col items-center gap-4 p-4">
        <h2 className="text-2xl text-center font-medium">
          Login or Create new Account to add and keep track of your job
          applications.
        </h2>
        <div className="w-full flex items-center gap-4">
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="w-full border border-slate-400 p-2.5 bg-linear-to-r from-indigo-500 to-purple-600 rounded-lg cursor-pointer hover:shadow-lg shadow-purple-900 text-base font-medium"
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="w-full border border-slate-400 p-2.5 rounded-lg hover:cursor-pointer bg-linear-65 from-purple-500 to-pink-500 text-base font-medium hover:shadow-lg shadow-fuchsia-900"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
export default Main;
