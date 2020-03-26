import React from "react";

const NavLink = ({ Name, onClick, Active }) => {
  return (
      <li className={"nav-item" + (Active ? " active" : "")}>
          <span className="nav-link">
      <a  onClick={onClick}>
                  {Name}
              </a></span>
    </li>
  );
};

export default NavLink;
