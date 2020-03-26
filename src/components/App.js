import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

const App = () => {
  const [data, setData] = useState({
    CurrentPage: "About",
    Resume: {
      About: {
        Name: "Priyadharshini Rajaram",
        Location: "London, United Kingdom",
        CurrentPosition: "Product Owner at Cloudroit",
        Summary:
          "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model and thorough understanding of React JS and its core principles. Experience with popular React.js workflows (such as Flux or Redux). Familiarity with newer specifications of EcmaScript."
      },
      Experience: [],
      Education: [],
      Awards: [],
      Projects: [],
      Skills: [],
      Hobbies: [],
      Contact: {
        Email: "priya@cloudroit.co.uk",
        Website: "priya.ws",
        Phone: "+44 7894561230"
      }
    }
  });
  const ChangePage = CurrentPage => {
    setData({ CurrentPage });
  };
  const SetSection = (Section, Content) => {
    setData({ Resume: { ...data.Resume, [Section]: Content } });
  };

  return (
    <div className="rezume">
      {console.log(data)}
      <Header
        ChangePage={ChangePage}
        Resume={data.Resume}
        CurrentPage={data.CurrentPage}
      />
      <Main
        CurrentPage={data.CurrentPage}
        Resume={data.Resume}
        SetSection={SetSection}
      />
    </div>
  );
};

export default App;
