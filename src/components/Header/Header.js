import React from "react";
import NavLink from "./_NavLink";
import { Link } from "react-router-dom";

const Header = ({ ChangePage, CurrentPage, Resume }) => {
  return (
    <nav className="navbar navbar-expand navbar-dark justify-content-between rezume-header">
      <Link to="/home">
        <span className="navbar-brand mb-0 h1 col-1">Rezume</span>
      </Link>
      <ul className="navbar-nav">
        {Object.keys(Resume).map((NavItem) => (
          <Link to="/">
            <NavLink
              Name={NavItem}
              Active={CurrentPage === NavItem}
              onClick={() => ChangePage(NavItem)}
              key={NavItem}
            />
          </Link>
        ))}
      </ul>
      <div className="btn btn-primary btn-sm col-1">
        <Link
          className="text-light text-decoration-none font-weight-bold"
          to="/aboutus"
        >
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Header;
