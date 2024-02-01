import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <img alt="" />
        <span>Accueil</span>
      </Link>
      <Link to="/game" className="nav-link">
        <img alt="" />
        <span>Collection</span>
      </Link>
      <Link to="/post" className="nav-link">
        <img alt="" />
        <span>Ajouter</span>
      </Link>
    </nav>
  );
}

export default Navbar;
