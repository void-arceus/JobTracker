import { createContext, useContext, useState } from "react";
import { useRef } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const timerRef = useRef(null);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 2000);
  };

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
