import React from "react";
import NavLink from "./_NavLink";

const Header = ({ ChangePage, CurrentPage }) => {
  return (
    <nav className="navbar navbar-expand navbar-dark justify-content-between rezume-header">
      <span className="navbar-brand mb-0 h1 col-1">Rezume</span>
      <ul className="navbar-nav">
        {["About", "Sections", "Contact", "Design"].map(NavItem => (
          <NavLink
            Name={NavItem}
            Active={CurrentPage === NavItem}
            onClick={() => ChangePage(NavItem)}
            key={NavItem}
          />
        ))}
      </ul>
      <button className="btn btn-primary btn-sm col-1">About Us</button>
    </nav>
  );
};

export default Header;
