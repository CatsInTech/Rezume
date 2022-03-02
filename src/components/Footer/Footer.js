import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="page-footer font-small pt-4">
      <div className="footer-copyright text-center py-3">
        Copyright © {year} Rezume
      </div>
    </footer>
  );
};

export default Footer;
