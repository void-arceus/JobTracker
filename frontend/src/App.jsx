import Main from "./components/Main";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { NavProvider } from "./context/NavContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <NavProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Router>
    </NavProvider>
  );
}

export default App;
