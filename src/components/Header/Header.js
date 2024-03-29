import React from "react";
import NavLink from "./_NavLink";
import { Link } from "react-router-dom";

const Header = ({ ChangePage, CurrentPage, Resume }) => {
  return (
    <nav className="navbar navbar-expand navbar-dark justify-content-between rezume-header">
      <span className="navbar-brand mb-0 h1 col-1">Rezume</span>
      <ul className="navbar-nav">
        {Object.keys(Resume).map((NavItem) => (
          <NavLink
            Name={NavItem}
            Active={CurrentPage === NavItem}
            onClick={() => ChangePage(NavItem)}
            key={NavItem}
          />
        ))}
      </ul>
      <Link to="/login" className="btn btn-primary btn-sm col-1">
        Login
      </Link>
      <a
        href="https://rezyume.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm col-1"
      >
        About Us
      </a>
    </nav>
  );
};

export default Header;
