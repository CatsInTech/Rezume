import React from "react";
import Rezume from "../Rezume/Rezume";
import Forms from "../Forms/Forms";

const Main = ({ CurrentPage, Resume, SetSection }) => {
  return (
    <div className="container-fluid rezume-main">
      {console.log("Inside Main", Resume)}
      <div className="row">
        <div className="col-3">
          <Forms
            CurrentPage={CurrentPage}
            SetSection={SetSection}
            Resume={Resume}
          />
        </div>
        <div className="col-9">
          <Rezume Resume={Resume} />
        </div>
      </div>
    </div>
  );
};

export default Main;
