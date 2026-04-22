import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Jobs from "./Jobs";
import Profile from "./Profile";
import AddForm from "./AddForm";
import { useNav } from "../context/NavContext";

function Main() {
  const { currTab } = useNav();
  return (
    <main className="relative h-screen w-full mb-12 md:mb-0">
      <Navbar />
      {currTab === "dashboard" ? (
        <Dashboard />
      ) : currTab === "jobs" ? (
        <Jobs />
      ) : currTab === "add" ? (
        <AddForm />
      ) : currTab === "profile" ? (
        <Profile />
      ) : null}
    </main>
  );
}
export default Main;
