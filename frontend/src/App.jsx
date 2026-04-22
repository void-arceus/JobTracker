import Main from "./components/Main";
import { NavProvider } from "./context/NavContext";

function App() {
  return (
    <NavProvider>
      <Main />
    </NavProvider>
  );
}

export default App;
