import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <span className="heroic-logo">Chucks Kitchen</span>
        </Link>
      </div>


      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <nav className="nav-home">
        <li><Link to="/explore">Home</Link></li>
      </nav>

      {/* Nav Links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/menu">Explore</Link></li>
        <li><Link to="/cart">My Orders</Link></li>
        <li><Link to="/account">Account</Link></li>
      </ul>

      {/* Login Button */}
      <div className="navbar-login">
        <Link to="/signin" className="login-btn">
          Login
        </Link>
      </div>
    </nav>
  );
}
