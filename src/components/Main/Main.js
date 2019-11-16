import React from "react";

const Main = ({ CurrentPage }) => {
  return (
    <div className="container-fluid rg-main">
      <div className="row">
        <div className="col-3">
          <div className="shadow-sm bg-white p-2">{CurrentPage}</div>
        </div>
        <div className="col-9">
          <div className="shadow-sm bg-white p-5">
            <h2>Boom! Your Resume..</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
