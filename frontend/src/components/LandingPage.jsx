import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <main className="relative h-screen w-full px-4 bg-gradient-to-br from-white via-slate-100 to-gray-200 flex flex-col items-center justify-center gap-6">
      <div className="absolute top-0 left-0 w-72 h-72 bg-slate-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-slate-500/10 blur-3xl rounded-full"></div>
      <div className="w-full max-w-xl mx-auto z-10">
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-gray-300 shadow-lg text-center flex flex-col items-center justify-center gap-6">
          <h2 className="text-lg font-semibold tracking-white text-gray-800">
            Job Tracker
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Track Your Job Applications Smarter
          </h1>
          <p className="text-sm md:text-base text-gray-700">
            Organize, track, and manage all your job applications in one place.
          </p>
          <div className="w-full flex flex-col items-center gap-3">
            <button
              onClick={() => navigate("/register")}
              className="w-full p-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium hover:cursor-pointer shadow-lg shadow-purple-500/30"
            >
              Create Account
            </button>
            <button
              onClick={() => navigate("/login")}
              className="w-full p-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg hover:cursor-pointer font-medium border border-gray-300 transition"
            >
              Login
            </button>
          </div>
          <p className="text-xs text-gray-700">✨ Simple • Fast • Clean</p>
        </div>
      </div>
    </main>
  );
}

export default LandingPage;
