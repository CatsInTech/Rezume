import React from "react";

const NavLink = ({ Name, onClick, Active }) => {
  return (
    <li className={"nav-item" + (Active ? " active" : "")}>
      <button className="nav-link" onClick={onClick}>
        {Name}
      </button>
    </li>
  );
};

export default NavLink;
