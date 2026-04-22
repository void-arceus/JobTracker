import { useNav } from "../context/NavContext";

function Navbar() {
  const { currTab, handleCurrTabChange } = useNav();

  return (
    <nav className="h-12 w-full bg-slate-900 fixed bottom-0 md:top-0 z-10">
      <div className="h-full w-full flex items-center justify-around">
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
    </nav>
  );
}

export default Navbar;
