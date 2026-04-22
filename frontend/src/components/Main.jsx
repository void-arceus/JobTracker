import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Jobs from "./Jobs";
import Profile from "./Profile";
import AddForm from "./AddForm";
import SideBar from "./SideBar";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useNav } from "../context/NavContext";
import { useState } from "react";

function Main() {
  const { currTab } = useNav();
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  return (
    <main className="h-screen w-full">
      <Navbar />
      {login ? (
        <LoginForm />
      ) : register ? (
        <RegisterForm />
      ) : (
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
      )}
    </main>
  );
}
export default Main;
