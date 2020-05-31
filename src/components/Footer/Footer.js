import React from 'react';
import GitInfo from 'react-git-info/macro';

const Footer = () => {
    const gitInfo = GitInfo();
    return (
        <footer className="page-footer font-small pt-4">
            <div className="text-center">
                <p>version : {gitInfo.commit.hash}</p>
            </div>
        </footer>
    );
};

export default Footer;
