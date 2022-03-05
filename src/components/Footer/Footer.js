import React from "react";
import AboutUs from "./AboutUs";
//import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
const Footer = () => {
  return (
    <footer className="page-footer font-small pt-4">
      <div className="footer-copyright text-center py-3">
        Copyright © 2020 Rezume
        <AboutUs />
      </div>
     
    </footer>
  );
};

export default Footer;
