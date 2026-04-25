import { useNav } from "../context/NavContext";

function Sidebar() {
  const { currTab, handleCurrTabChange } = useNav();
  return (
    <div className="hidden lg:flex h-full w-80 bg-white/15 backdrop-blur-xl border-r border-white/20 pt-16 flex-col items-start">
      <div
        onClick={() => {
          handleCurrTabChange("profile");
        }}
        className={`w-full ${currTab === "profile" ? "bg-white/40 hover:bg-white/40" : ""} flex items-center gap-2 p-4 text-gray-800  hover:bg-white/15 hover:cursor-pointer border-b border-white/40 transition`}
      >
        <img src="./profile.png" alt="profile-logo" className="h-5" />
        <p className="text-sm text-gray-800 font-medium">Profile</p>
      </div>

      <div
        onClick={() => {
          handleCurrTabChange("dashboard");
        }}
        className={`w-full ${currTab === "dashboard" ? "bg-white/40 hover:bg-white/40" : ""} flex items-center gap-2 p-4 text-gray-800  hover:bg-white/15 hover:cursor-pointer border-b border-white/40 transition`}
      >
        <img src="./layout.png" alt="profile-logo" className="h-5" />
        <p className="text-sm text-gray-800 font-medium">Dashboard</p>
      </div>

      <div
        onClick={() => {
          handleCurrTabChange("jobs");
        }}
        className={`w-full ${currTab === "jobs" ? "bg-white/40 hover:bg-white/40" : ""} flex items-center gap-2 p-4 text-gray-800  hover:bg-white/15 hover:cursor-pointer border-b border-white/40 transition`}
      >
        <img src="./view-list.png" alt="profile-logo" className="h-5" />
        <p className="text-sm text-gray-800 font-medium">View Jobs</p>
      </div>

      <div
        onClick={() => {
          handleCurrTabChange("add");
        }}
        className={`w-full ${currTab === "add" ? "bg-white/40 hover:bg-white/40" : ""} flex items-center gap-2 p-4 text-gray-800  hover:bg-white/15 hover:cursor-pointer border-b border-white/40 transition`}
      >
        <img src="./add.png" alt="profile-logo" className="h-5" />
        <p className="text-sm text-gray-800 font-medium">Add New Job</p>
      </div>
    </div>
  );
}

export default Sidebar;
