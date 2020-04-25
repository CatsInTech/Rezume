import React from 'react';

const Footer = () => {
    return (
        <footer className="rezume-footer page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Rezume</h5>
                <p>A site for building rezume</p>
              </div>
              {/* <hr className="clearfix w-100 d-md-none pb-3" />
              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Link 1</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://app.rezume.best"> app.rezume.best</a>
          </div>
        </footer>
    );
}


export default Footer;