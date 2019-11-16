import React from "react";

const Rezume = ({ Resume }) => {
  const { Name, Location, CurrentPosition, Summary } = Resume.About;
  const NameArray = Name.split(" ");
  return (
    <div className="rezume-rezume">
      <h2>
        <span>{NameArray.shift()}</span> {NameArray.join(" ")}
      </h2>
      <p className="location">{Location}</p>
      <p className="summary">
        <strong className="position">{CurrentPosition}</strong>
        {Summary}
      </p>
    </div>
  );
};

export default Rezume;
