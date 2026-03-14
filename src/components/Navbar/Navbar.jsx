import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaTerminal,
  FaCode,
  FaUserAstronaut,
  FaFolderOpen,
  FaPaperPlane,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/home", name: "Home", icon: <FaCode /> },
    { path: "/projects", name: "Projects", icon: <FaFolderOpen /> },
    { path: "/formation-hub", name: "Formation Hub", icon: <FaTerminal /> },
    { path: "/about", name: "About", icon: <FaUserAstronaut /> },
  ];

  return (
    <header className="navbar-container">
      <nav className="navbar">
        {/* LOGO : Look Tech / Startup */}
        <div className="navbar-logo">
          <NavLink to="/">
            <motion.div
              whileHover={{ rotate: -15, scale: 1.1 }}
              className="logo-icon-wrapper"
            >
              iK
            </motion.div>
            <span className="logo-text">
              ivan Kamo<span className="dot">_</span>
            </span>
          </NavLink>
        </div>

        {/* DESKTOP LINKS */}
        <ul className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="nav-icon">{link.icon}</span>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="nav-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ACTION BUTTON */}
        <div className="navbar-action desktop-only">
          <NavLink to="/contact" className="btn-contact-nav">
            <FaPaperPlane /> <span>Let's Build</span>
          </NavLink>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* MOBILE MENU */}
      <motion.div
        className={`mobile-menu ${isOpen ? "open" : ""}`}
        initial={false}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.path} onClick={() => setIsOpen(false)}>
              <NavLink to={link.path}>
                {link.icon} {link.name}
              </NavLink>
            </li>
          ))}
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/contact" className="mobile-contact-btn">
              Contact Me
            </NavLink>
          </li>
        </ul>
      </motion.div>
    </header>
  );
}

export default Navbar;
