import { useState, useContext, createContext } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [currTab, setCurrTab] = useState("dashboard");

  const handleCurrTabChange = (value) => {
    setCurrTab(value);
  };

  return (
    <NavContext.Provider value={{ currTab, handleCurrTabChange }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
