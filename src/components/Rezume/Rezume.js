import React from "react";

const Rezume = ({ Resume }) => {
  return (
    <div className="shadow-sm bg-white p-5">
      <h2>Boom! Your Resume..</h2>
      <pre>{JSON.stringify(Resume, null, 2)}</pre>
    </div>
  );
};

export default Rezume;
