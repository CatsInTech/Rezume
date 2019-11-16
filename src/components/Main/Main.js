import React from "react";
import Rezume from "../Rezume/Rezume";
import Forms from "../Forms/Forms";

const Main = ({ CurrentPage, Resume }) => {
  return (
    <div className="container-fluid rezume-main">
      <div className="row">
        <div className="col-3">
          <Forms CurrentPage={CurrentPage} />
        </div>
        <div className="col-9">
          <Rezume Resume={Resume} />
        </div>
      </div>
    </div>
  );
};

export default Main;
