import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import Logo from "./components/Logo";

function App() {
  return (
    <>
      <header>
        <Logo />
      </header>
      <div className="App">
        <p>Hello User !</p>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
