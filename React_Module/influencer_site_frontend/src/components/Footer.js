import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center py-4 mt-auto border-top border-secondary shadow-sm">
      <div className="container">
        <small className="footer-text">
          &copy; {new Date().getFullYear()} <span className="srk-brand">SRK World</span>. Built with 💖 by Fans, for Fans.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
