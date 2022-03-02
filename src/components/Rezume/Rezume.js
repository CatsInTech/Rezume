import React from "react";

const Rezume = ({ Resume }) => {
  const { Name, Location, CurrentPosition, Summary } = Resume.About;
  const { Email, Website, Phone } = Resume.Contact;
  const NameArray = Name.split(" ");
  return (
    <div className="rezume-rezume">
      <div className="rezume-rezume-contact">
        <p>
          Email:{" "}
          <strong>
            <a href={"mailto:" + Email}>{Email}</a>
          </strong>
        </p>
        <p>
          Website:{" "}
          <strong>
            <a
              href={"http://" + Website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Website}
            </a>
          </strong>
        </p>
        <p>
          Phone: <strong>{Phone}</strong>
        </p>
      </div>
      <h2>
        <span>{NameArray.shift()}</span> {NameArray.join(" ")}
      </h2>
      <strong className="position">{CurrentPosition}</strong>
      <p className="location">{Location}</p>
      <p className="summary">
        {Summary}
      </p>
    </div>
  );
};

export default Rezume;
