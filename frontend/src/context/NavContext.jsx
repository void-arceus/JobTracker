import { useState, useContext, createContext } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [currTab, setCurrTab] = useState("profile");
  const [jobEditing, setJobEditing] = useState(false);
  const [jobToUpdate, setJobToUpdate] = useState({});

  const handleJobEditing = (value) => {
    setJobEditing(value);
  };

  const handleCurrTabChange = (value) => {
    setCurrTab(value);
  };

  const handleJobToUpdate = (job) => {
    setJobToUpdate(job);
  };

  return (
    <NavContext.Provider
      value={{
        currTab,
        handleCurrTabChange,
        jobEditing,
        handleJobEditing,
        jobToUpdate,
        handleJobToUpdate,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
