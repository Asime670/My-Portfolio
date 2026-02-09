import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">AD<span className="dot">.</span></div>
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About Me</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#" className="cv-btn">Download CV</a></li>
    </ul>
  </nav>
);

export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css"; // or import './App.css' if your styles are there

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         Asime<span className="dot">Domitila</span>
//       </div>

//       <div className="hamburger" onClick={toggleMenu}>
//         <div className="bar" />
//         <div className="bar" />
//         <div className="bar" />
//       </div>

//       <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
//         <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
//         <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
//         <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
//         <li><a href="#cv" className="cv-btn" onClick={() => setMenuOpen(false)}>Download CV</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
