import React, {forwardRef, useImperativeHandle, useState} from "react";
import NavLink from "./_NavLink";
//import AboutUs from "../Main/AboutUs";

const Header = forwardRef((props,ref) => {
const [isClicked,setClicked]=useState(false);
function Clicked()
{setClicked(isClicked= true);
}
//useImperativeHandle(ref,()=>({Clicked}));

  return (
    <nav className="navbar navbar-expand navbar-dark justify-content-between rezume-header">
      <span className="navbar-brand mb-0 h1 col-1">Rezume</span>
      <ul className="navbar-nav">
        {Object.keys(props.Resume).map(NavItem => (
          <NavLink
            Name={NavItem}
            Active={props.CurrentPage === NavItem}
            onClick={() => props.ChangePage(NavItem)}
            key={NavItem}
          />
        ))}
      </ul>
      <button className="btn btn-primary btn-sm col-1" onClick={Clicked}>About Us</button>
  
    </nav>
  );
});

export default Header;
//export {Clicked};

