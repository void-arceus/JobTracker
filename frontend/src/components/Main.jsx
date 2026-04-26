import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Jobs from "./Jobs";
import Profile from "./Profile";
import AddForm from "./AddForm";
import SideBar from "./SideBar";
import LandingPage from "./LandingPage";
import { useNav } from "../context/NavContext";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function Main() {
  const { currTab } = useNav();
  const { isLoggedIn } = useAuth();

  useEffect(() => {}, []);

  return isLoggedIn ? (
    <main className="h-screen w-full bg-gradient-to-br from-purple-300 via-violet-400 to-indigo-500 flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <div className="flex-1 overflow-y-auto">
          {currTab === "dashboard" ? (
            <Dashboard />
          ) : currTab === "jobs" ? (
            <Jobs />
          ) : currTab === "add" ? (
            <AddForm />
          ) : currTab === "profile" ? (
            <Profile />
          ) : null}
        </div>
      </div>
    </main>
  ) : (
    <LandingPage />
  );
}
export default Main;
