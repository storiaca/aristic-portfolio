import { useState } from "react";
// import { Link } from "react-router-dom";

import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Aleksandar Ristic.</h1>
      <div id="menu-icon">
        <BiMenuAltRight />
      </div>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
};

export default Header;
