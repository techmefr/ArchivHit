import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <p>Hello User !</p>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
