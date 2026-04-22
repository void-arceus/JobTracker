import { useNav } from "../context/NavContext";

function Sidebar() {
  const { currTab, handleCurrTabChange } = useNav();
  return (
    <div className="hidden lg:flex bg-slate-700 h-full w-xs text-slate-100 pt-16 flex-col items-start">
      <div
        onClick={() => {
          handleCurrTabChange("profile");
        }}
        className={`w-full ${currTab === "profile" ? "bg-slate-800 hover:bg-slate-800" : "bg-slate-700 hover:bg-slate-600"} border-b border-slate-500 p-3 flex items-center gap-3 cursor-pointer`}
      >
        <img src="./profile.png" alt="profile-logo" className="h-5" />
        <p>Profile</p>
      </div>

      <div
        onClick={() => {
          handleCurrTabChange("dashboard");
        }}
        className={`w-full ${currTab === "dashboard" ? "bg-slate-800 hover:bg-slate-800" : "bg-slate-700 hover:bg-slate-600"} border-b border-slate-500 p-3 flex items-center gap-3 cursor-pointer`}
      >
        <img src="./layout.png" alt="profile-logo" className="h-5" />
        <p>Dashboard</p>
      </div>

      <div
        onClick={() => {
          handleCurrTabChange("jobs");
        }}
        className={`w-full ${currTab === "jobs" ? "bg-slate-800 hover:bg-slate-800" : "bg-slate-700 hover:bg-slate-600"} border-b border-slate-500 p-3 flex items-center gap-3 cursor-pointer`}
      >
        <img src="./view-list.png" alt="profile-logo" className="h-5" />
        <p>View Jobs</p>
      </div>

      <div
        onClick={() => {
          handleCurrTabChange("add");
        }}
        className={`w-full ${currTab === "add" ? "bg-slate-800 hover:bg-slate-800" : "bg-slate-700 hover:bg-slate-600"} border-b border-slate-500 p-3 flex items-center gap-3 cursor-pointer`}
      >
        <img src="./add.png" alt="profile-logo" className="h-5" />
        <p>Add New Job</p>
      </div>
    </div>
  );
}

export default Sidebar;
