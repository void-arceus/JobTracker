import { useNav } from "../context/NavContext";
import { useAuth } from "../context/AuthContext";
import { handleLogoutUser } from "../api/auth.api.js";

function Navbar() {
  const { currUser, logout } = useAuth();
  const { currTab, handleCurrTabChange } = useNav();

  function handleLogout() {
    handleLogoutUser();
    logout();
  }

  return (
    <nav className="h-12 lg:h-16 w-full bg-white/10 backdrop-blur-md border-b border-gray-300 fixed bottom-0 lg:top-0 z-10">
      <div className="lg:hidden h-full w-full flex items-center justify-around">
        <div
          onClick={() => handleCurrTabChange("dashboard")}
          className={`${currTab === "dashboard" ? "bg-white/30 border border-gray-300" : ""} rounded-lg text-slate-100 h-full flex-1 flex items-center  justify-center text-base font-medium cursor-pointer px-2 select-none`}
        >
          <img src="/layout.png" alt="Dashboard" className="h-5" />
        </div>
        <div
          onClick={() => handleCurrTabChange("jobs")}
          className={`${currTab === "jobs" ? "bg-white/30 border border-gray-300" : ""} rounded-lg text-slate-100 h-full flex-1 flex items-center justify-center text-base font-medium cursor-pointer px-2 select-none`}
        >
          <img src="/view-list.png" alt="Dashboard" className="h-5" />
        </div>
        <div
          onClick={() => handleCurrTabChange("add")}
          className={`${currTab === "add" ? "bg-white/30 border-gray-300" : ""} rounded-lg text-slate-100 h-full flex-1 flex items-center justify-center text-base font-medium cursor-pointer px-2 select-none`}
        >
          <img src="/tab.png" alt="Dashboard" className="h-5" />
        </div>
        <div
          onClick={() => handleCurrTabChange("profile")}
          className={`${currTab === "profile" ? "bg-white/30 border-gray-300" : ""} rounded-lg text-slate-100 h-full flex-1 flex items-center justify-center text-base font-medium cursor-pointer px-2 select-none`}
        >
          <img src="/profile.png" alt="Dashboard" className="h-5" />
        </div>
      </div>

      {/* for larger screens  */}
      <div className="hidden lg:flex w-full h-full text-slate-200 items-center justify-between px-8">
        <div>
          <h1 className="text-2xl text-gray-800 font-bold tracking-wide">
            JobTracker
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-gray-800">
            {currUser.username ? currUser.username : ""}
          </h1>
          <button
            onClick={handleLogout}
            className="text-purple-700 font-medium px-3 py-1 bg-gray-100 border border-gray-300 rounded-lg transition hover:bg-gray-200 hover:text-purple-800 hover:cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
