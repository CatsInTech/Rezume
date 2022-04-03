import React from "react";
import Rezume from "../Rezume/Rezume";
import Forms from "../Forms/Forms";

const Main = ({
  CurrentPage,
  Resume,
  SetSection,
  appState,
  setAppState,
  ChangePage,
  SetSwitch,
  ImageHandler,
}) => {
  return (
    <div className="container-fluid rezume-main">
      <div className="row">
        <div className="col-3">
          <Forms
            CurrentPage={CurrentPage}
            SetSection={SetSection}
            SetSwitch={SetSwitch}
            ImageHandler={ImageHandler}
            Resume={Resume}
          />
        </div>
        <div className="col-9">
          <Rezume
            Resume={Resume}
            CurrentPage={CurrentPage}
            ChangePage={ChangePage}
            SetSection={SetSection}
            appState={appState}
            setAppState={setAppState}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
