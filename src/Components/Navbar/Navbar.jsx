
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";

import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="green-header">

      {/* TOP HEADER */}
      <div className="green-header-top">

        <div className="green-company">

          <div className="green-logo">
            <img src={logo} alt="Green Tech Solutions Logo" />
          </div>

          <div className="green-company-info">
            <h2>Green Tech Solution Private Limited</h2>

            <div className="green-company-details">
              <span>
                <FiMapPin />
                Nic tin, New Delhi
              </span>

              <span>
                <FiMapPin />
                GST No. - 07AAFCG5355E2ZO
              </span>
            </div>
          </div>

        </div>

        {/* CONTACT BUTTONS */}
        <div className="green-header-contact">

          <a href="tel:08043880537" className="green-call-btn">
            <FiPhone />
            <div>
              <strong>Call</strong>
              <small>08043880537</small>
            </div>
          </a>

          <a
            href="mailto:info@greentechsolution.com"
            className="green-email-btn"
          >
            <FiMail />
            <span>Email</span>
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="green-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* NAVIGATION */}
      <nav className={`green-navigation ${menuOpen ? "active" : ""}`}>

        <div className="green-nav-links">

          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/products" onClick={closeMenu}>Products</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>

        </div>

      </nav>

    </header>
  );
};

export default Navbar;
