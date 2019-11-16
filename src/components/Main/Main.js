import React from "react";
import Rezume from "../Rezume/Rezume";

const Main = ({ CurrentPage, Resume }) => {
  return (
    <div className="container-fluid rg-main">
      <div className="row">
        <div className="col-3">
          <div className="shadow-sm bg-white p-2">{CurrentPage}</div>
        </div>
        <div className="col-9">
          <Rezume Resume={Resume} />
        </div>
      </div>
    </div>
  );
};

export default Main;
