import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const App = () => {
  const [appState, setAppState] = useState({
    CurrentPage: "About",
    Resume: {
      About: {
        Name: "Priyadharshini Rajaram",
        Location: "London, United Kingdom",
        CurrentPosition: "Product Owner at Cloudroit",
        Summary:
          "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model and thorough understanding of React JS and its core principles. Experience with popular React.js workflows (such as Flux or Redux). Familiarity with newer specifications of EcmaScript.",
      },
      Skills: {
        TechnicalSkills: "(optional) C++, c, JAVA",
        SoftSkills: "(optional) Creative, Hardworking",
      },
      // Experience, Education, Awards, Projects object have the same item/Object member names --(Current, List) because in the FormELement.js we require this "Current" and "List" to render the form properly
      Experiences: {
        Current: 0,
        List: [],
      },
      Awards: {
        Current: 0,
        List: [
          {
            Title: "Face and Emotion Detection Web App",
            TechStack: "JavaScript, Tensorflow.js",
            ProjectSummary:
              "This project is a face and emotion detection web app. The project is built using HTML, CSS, and vanilla JavaScript. In this project I have used tensorflow.js API to help detect faces and emotions using the webcam and then dynamically paint the output data (detected face box, emotions, and other details) from the API using HTML canvas.",
            GitHubURL: "(Optional) Ex: https://github.com/CatsInTech/Rezume",
            DeployedURL: "(Optional) Ex:https://github.com/CatsInTech/Rezume",
          },
        ],
      },
      Projects: {
        Current: 0,
        List: [],
      },
      Education: {
        Current: 0,
        List: [
          {
            Title: "Face and Emotion Detection Web App",
            TechStack: "JavaScript, Tensorflow.js",
            ProjectSummary:
              "This project is a face and emotion detection web app. The project is built using HTML, CSS, and vanilla JavaScript. In this project I have used tensorflow.js API to help detect faces and emotions using the webcam and then dynamically paint the output data (detected face box, emotions, and other details) from the API using HTML canvas.",
            GitHubURL: "https://github.com/CatsInTech/Rezume",
            DeployedURL: "https://github.com/CatsInTech/Rezume",
          },
        ],
      },
      Hobbies: {
        Hobbies: "Playing basketball, Music",
      },
      Contact: {
        Email: "priya@cloudroit.co.uk",
        Website: "priya.ws",
        Phone: "+44 7894561230",
      },
    },
  });
  const ChangePage = (CurrentPage) => {
    setAppState({ ...appState, CurrentPage: CurrentPage });
  };
  const SetSection = (Section, Content) => {
    setAppState({
      ...appState,
      Resume: { ...appState.Resume, [Section]: Content },
    });
  };
  return (
    <div className="rezume">
      <Header
        ChangePage={ChangePage}
        Resume={appState.Resume}
        CurrentPage={appState.CurrentPage}
      />
      <Main
        CurrentPage={appState.CurrentPage}
        Resume={appState.Resume}
        ChangePage={ChangePage}
        SetSection={SetSection}
        appState={appState}
        setAppState={setAppState}
      />
      <Footer />
    </div>
  );
};

export default App;
