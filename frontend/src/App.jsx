import Main from "./components/Main";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { NavProvider } from "./context/NavContext";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";
import { SpinnerProvider } from "./context/SpinnerContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToastLayout from "./Layout/ToastLayout";
import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  return (
    <ToastProvider>
      <SpinnerProvider>
        <AuthProvider>
          <NavProvider>
            <Router>
              <Routes>
                <Route element={<ToastLayout />}>
                  <Route path="/" element={<Main />} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/register" element={<RegisterForm />} />
                </Route>
              </Routes>
            </Router>
          </NavProvider>
        </AuthProvider>
      </SpinnerProvider>
    </ToastProvider>
  );
}

export default App;
