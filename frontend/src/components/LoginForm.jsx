import { handleLogin } from "../api/auth.api.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSpinner } from "../context/SpinnerContext";
import Spinner from "../Animations/Spinner";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showSpinner } = useSpinner();

  async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObj = Object.fromEntries(formData.entries());
    try {
      showSpinner(true);
      const res = await handleLogin(dataObj);
      login(res);
      navigate("/");
    } catch (err) {
      console.error(err);
      showSpinner(false);
    } finally {
      showSpinner(false);
    }
  }
  return (
    <div className="bg-slate-800 h-screen w-full flex items-center justify-center p-4">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-sm text-slate-200 border border-slate-500 p-4 py-10 flex flex-col items-center gap-4 rounded-xl"
      >
        <h1 className="text-3xl font-semibold text-slate-100">Login</h1>
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          className="w-full border bg-slate-700 border-slate-400 p-3.5 rounded-lg ring-0 outline-0 focus:ring-2 focus:ring-violet-600 transition ease-in-out duration-300 text-slate-100"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          className="w-full border bg-slate-700 border-slate-400 p-3.5 rounded-lg ring-0 outline-0 focus:ring-2 focus:ring-violet-600 transition ease-in-out duration-300 text-slate-100"
        />
        <div className="w-full flex flex-col items-start gap-1 text-md">
          <p>
            Don't have an account? &nbsp;
            <a
              onClick={() => {
                navigate("/register");
              }}
              className="font-medium underline text-green-500 cursor-pointer hover:text-green-400"
            >
              Create
            </a>
          </p>
          <p className="underline text-base cursor-pointer text-red-400 font-medium hover:text-red-300">
            Forgot Password
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-3">
          <button
            type="submit"
            className="w-full p-3 bg-linear-to-r from-violet-500  to-fuchsia-500 rounded-lg font-medium cursor-pointer shadow-purple-900 hover:shadow-lg flex items-center justify-center"
          >
            <Spinner />
            Login
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/");
            }}
            className="w-full p-3 border border-slate-500 hover:bg-slate-700 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
