import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; // Custom styles for more color!

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar px-4 shadow-sm">
      <div className="container-fluid">
        {/* Brand Logo or Name */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          <span className="srk-highlight">SRK</span> World 🌟
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Right Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="btn btn-srk-outline" to="/login">
                Admin Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
