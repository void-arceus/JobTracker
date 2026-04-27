import { handleLogin } from "../api/auth.api.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useToast } from "../context/ToastContext";
import Spinner from "../Animations/Spinner";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showToast } = useToast();

  async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObj = Object.fromEntries(formData.entries());
    try {
      setIsLoading(true);
      const res = await handleLogin(dataObj);
      login(res);
      navigate("/");
      showToast("Logged in Successfully", "success");
    } catch (err) {
      setIsLoading(false);
      const message = err.response.data.message || "Login Failed";
      showToast(message, "error");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="relative h-screen w-full flex items-center justify-center p-4">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white/15 backdrop-blur-xl border border-gray-300 rounded-2xl shadow-xl w-full max-w-sm p-4 py-10 flex flex-col items-center gap-4"
      >
        <h1 className="text-3xl font-bold text-gray-900 tracking-wide">
          LOGIN
        </h1>{" "}
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          className="w-full bg-white/30 border border-gray-300 text-gray-900 placeholder-gray-600 shadow-sm shadow-black/10 font-normal text-base p-3.5 rounded-lg ring-0 outline-0 focus:ring-2 focus:ring-purple-600 transition ease-in-out duration-300"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          className="w-full bg-white/30 border border-gray-300 text-gray-900 placeholder-gray-600 shadow-sm shadow-black/10 font-normal text-base p-3.5 rounded-lg ring-0 outline-0 focus:ring-2 focus:ring-purple-600 transition ease-in-out duration-300"
        />
        <div className="w-full flex flex-col items-start gap-1 text-md">
          <p className="text-base text-gray-900 font-medium">
            Don't have an account? &nbsp;
            <a
              onClick={() => {
                navigate("/register");
              }}
              className="font-semibold underline text-gray-800 cursor-pointer hover:text-gray-700"
            >
              Create
            </a>
          </p>
          <p className="underline text-base cursor-pointer text-gray-800 font-medium hover:text-gray-700">
            Forgot Password
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-3">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 border border-purple-500/40 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium cursor-pointer shadow-md shadow-purple-500/50 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-80"
          >
            {isLoading ? <Spinner isLoading={isLoading} /> : "Login"}
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/");
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

export default LoginForm;
