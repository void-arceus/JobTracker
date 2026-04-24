import { useState, useEffect, useContext, createContext } from "react";
import { getCurrentUser } from "../api/user.api.js";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await getCurrentUser();
    if (res) {
      setIsLoggedIn(true);
      setCurrUser(res);
    } else {
      setIsLoggedIn(false);
      setCurrUser(null);
    }
  };

  const login = async (data) => {
    setIsLoggedIn(true);
    setCurrUser(data);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, getCurrentUser, isLoggedIn, currUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
