import React from "react";
import GitInfo from "react-git-info/macro";
const gitInfo = GitInfo();

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="page-footer font-small pt-4">
      <div className="footer-copyright text-center py-3">
        Copyright © {year} Rezume
        <br />
        Version: {gitInfo.commit.hash}
      </div>
    </footer>
  );
};

export default Footer;
