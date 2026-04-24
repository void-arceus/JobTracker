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
    <nav className="h-12 lg:h-16 w-full bg-slate-900 fixed bottom-0 lg:top-0 z-10">
      <div className="lg:hidden h-full w-full flex items-center justify-around">
        <div
          onClick={() => handleCurrTabChange("dashboard")}
          className={`${currTab === "dashboard" ? "bg-slate-700" : "bg-slate-900"} text-slate-100 h-full flex-1 flex items-center  justify-center text-base font-medium cursor-pointer px-2 select-none`}
        >
          <img src="/layout.png" alt="Dashboard" className="h-5" />
        </div>
        <div
          onClick={() => handleCurrTabChange("jobs")}
          className={`${currTab === "jobs" ? "bg-slate-700" : "bg-slate-900"} text-slate-100 h-full flex-1 flex items-center justify-center text-base font-medium cursor-pointer px-2 select-none`}
        >
          <img src="/view-list.png" alt="Dashboard" className="h-5" />
        </div>
        <div
          onClick={() => handleCurrTabChange("add")}
          className={`${currTab === "add" ? "bg-slate-700" : "bg-slate-900"} text-slate-100 h-full flex-1 flex items-center justify-center text-base font-medium cursor-pointer px-2 select-none`}
        >
          <img src="/tab.png" alt="Dashboard" className="h-5" />
        </div>
        <div
          onClick={() => handleCurrTabChange("profile")}
          className={`${currTab === "profile" ? "bg-slate-700" : "bg-slate-900"} text-slate-100 h-full flex-1 flex items-center justify-center text-base font-medium cursor-pointer px-2 select-none`}
        >
          <img src="/profile.png" alt="Dashboard" className="h-5" />
        </div>
      </div>

      {/* for larger screens  */}
      <div className="hidden lg:flex w-full h-full text-slate-200 items-center justify-between px-8">
        <div>
          <h1 className="text-2xl font-bold">JobTracker</h1>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold">
            {currUser.username ? currUser.username : ""}
          </h1>
          <button
            onClick={handleLogout}
            className="border border-slate-600 bg-linear-to-r from-violet-500 to-fuchsia-500 p-1.5 px-2.5 rounded-lg text-base font-medium cursor-pointer hover:shadow-lg hover:shadow-violet-900"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
