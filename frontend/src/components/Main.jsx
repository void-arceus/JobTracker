import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Jobs from "./Jobs";
import Profile from "./Profile";
import AddForm from "./AddForm";
import SideBar from "./SideBar";
import { useNav } from "../context/NavContext";

function Main() {
  const { currTab } = useNav();
  return (
    <main className="h-screen w-full">
      <Navbar />
      <div className="w-full h-full flex items-center">
        <SideBar />
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
    </main>
  );
}
export default Main;
