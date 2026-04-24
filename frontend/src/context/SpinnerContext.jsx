import { useState, useContext, createContext } from "react";

const SpinnerContext = createContext();

export const SpinnerProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showSpinner = (value) => {
    setIsLoading(value);
  };

  return (
    <SpinnerContext.Provider value={{ isLoading, showSpinner }}>
      {children}
    </SpinnerContext.Provider>
  );
};

export const useSpinner = () => useContext(SpinnerContext);
