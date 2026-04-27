import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleRegister } from "../api/auth.api.js";
import { useToast } from "../context/ToastContext";
import Spinner from "../Animations/Spinner";

function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();

  async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObj = Object.fromEntries(formData.entries());
    if (!dataObj.email || !dataObj.username) {
      showToast("All fields are required", "error");
      return;
    }
    if (dataObj.password.trim() === "") {
      showToast("Missing Credentials", "error");
      return;
    }
    if (dataObj.password.trim() !== dataObj.confirmPassword.trim()) {
      showToast("Password do not match", "error");
      return;
    }
    const filteredObj = {
      username: dataObj.username,
      email: dataObj.email,
      password: dataObj.password.trim(),
    };
    try {
      setIsLoading(true);
      await handleRegister(filteredObj);
      showToast("User Registered Successfully", "success");
      navigate("/login");
    } catch (err) {
      setIsLoading(false);
      const message = err?.response?.data?.message || "Registration Failed";
      showToast(message, "error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen w-full p-2 py-3 lg:pt-18 lg:pb-18 flex items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-lg p-2 sm:p-4 py-10 bg-white/15 backdrop-blur-xl border border-gray-300 rounded-2xl shadow-xl flex flex-col items-center gap-4"
      >
        <h1 className="text-3xl text-gray-800 font-bold tracking-wide">
          CREATE ACCOUNT
        </h1>
        <div className="w-full flex flex-col items-start gap-1">
          <label className="text-sm font-medium text-gray-700">Name:</label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="w-full bg-white/30 border border-gray-300 text-gray-900 placeholder-gray-600 shadow-sm shadow-black/10 font-normal text-base p-3.5 rounded-lg ring-0 outline-0 focus:ring-2 focus:ring-purple-500  transition ease-in-out duration-300"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label className="text-sm font-medium text-gray-700">Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full bg-white/30 border border-gray-300 text-gray-900 placeholder-gray-600 shadow-sm shadow-black/10 font-normal text-base p-3.5 rounded-lg ring-0 outline-0 focus:ring-2 focus:ring-purple-500 transition ease-in-out duration-300"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label className="text-sm font-medium text-gray-700">Password:</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full bg-white/30 border border-gray-300 text-gray-900 placeholder-gray-600 shadow-sm shadow-black/10 font-normal text-base p-3.5 rounded-lg ring-0 outline-0 focus:ring-2 focus:ring-purple-500 transition ease-in-out duration-300"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label className="text-sm font-medium text-gray-700">
            Confirm Password:
          </label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="w-full bg-white/30 border border-gray-300 text-gray-900 placeholder-gray-600 shadow-sm shadow-black/10 font-normal text-base p-3.5 rounded-lg ring-0 outline-0 focus:ring-2 focus:ring-purple-500 transition ease-in-out duration-300"
          />
        </div>
        <div className="w-full">
          <p className="text-gray-800 text-sm font-medium">
            Already have an account?
            <span
              onClick={() => {
                navigate("/login");
              }}
              className="text-sm font-medium underline cursor-pointer text-gray-700 hover:text-gray-800"
            >
              &nbsp;Login
            </span>
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 border border-purple-500/40 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-base font-medium cursor-pointer shadow-md shadow-purple-500/50 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-purple-600"
          >
            {isLoading ? <Spinner isLoading={isLoading} /> : "Register"}
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/login");
            }}
            className="w-full p-3 bg-gray-100 border border-gray-300 text-gray-800 font-medium hover:bg-gray-200 rounded-lg cursor-pointer transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
