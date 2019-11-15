import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-between">
      <span className="navbar-brand mb-0 h1 col-1">React Resume Generator</span>
      <ul className="navbar-nav">
        <li className="nav-item">
          <span className="nav-link">About</span>
        </li>
        <li className="nav-item">
          <span className="nav-link">Sections</span>
        </li>
        <li className="nav-item">
          <span className="nav-link">Contact</span>
        </li>
        <li className="nav-item">
          <span className="nav-link">Design</span>
        </li>
      </ul>
      <button className="btn btn-primary col-1">About Us</button>
    </nav>
  );
};

export default Header;
