import { useNavigate } from "react-router-dom";

function RegisterForm({ handleShowFormChange }) {
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="bg-slate-800 h-screen w-full p-2 py-3 lg:pt-22 flex items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-lg p-2 py-4 text-slate-100 flex flex-col items-center gap-4 border border-slate-500 rounded-2xl"
      >
        <h1 className="text-3xl font-medium">Register</h1>
        <input
          placeholder="Username"
          className="w-full border border-slate-600 outline-0 ring-0 p-3.5 rounded-lg focus:ring-2 focus:ring-violet-500 bg-slate-700 transition ease-in-out duration-300"
        />
        <input
          placeholder="e-mail"
          className="w-full border border-slate-600 outline-0 ring-0 p-3.5 rounded-lg focus:ring-2 focus:ring-violet-500 bg-slate-700 transition ease-in-out duration-300"
        />
        <input
          placeholder="Password"
          className="w-full border border-slate-600 outline-0 ring-0 p-3.5 rounded-lg focus:ring-2 focus:ring-violet-500 bg-slate-700 transition ease-in-out duration-300"
        />
        <input
          placeholder="Confirm Password"
          className="w-full border border-slate-600 outline-0 ring-0 p-3.5 rounded-lg focus:ring-2 focus:ring-violet-500 bg-slate-700 transition ease-in-out duration-300"
        />
        <div className="w-full">
          <p>
            Already have an account?
            <span
              onClick={() => {
                navigate("/login");
              }}
              className="text-base font-medium underline cursor-pointer text-red-400 hover:text-red-500"
            >
              &nbsp;Login
            </span>
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <button
            type="submit"
            className="w-full p-3.5 bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-lg hover:cursor-pointer hover:shadow-lg shadow-purple-800 text-base font-medium"
          >
            Register
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/");
            }}
            className="w-full p-3.5 hover:cursor-pointer border border-slate-500 rounded-lg hover:bg-slate-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
