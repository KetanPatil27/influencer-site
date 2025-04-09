import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      {/* Brand Name */}
      <Link className="navbar-brand" to="/">
        Influencer
      </Link>

      {/* Admin Login Button aligned to the right */}
      <div className="ms-auto">
        <Link className="btn btn-outline-light" to="/login">
          Admin Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
