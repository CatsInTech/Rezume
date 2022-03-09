import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import Home from "./Home/Home";

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
      Experience: [],
      Education: [],
      Awards: [],
      Projects: [],
      Skills: [],
      Hobbies: [],
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
    setAppState({ Resume: { ...appState.Resume, [Section]: Content } });
  };
  return (
    <Router>
      <div className="rezume">
        <Header
          ChangePage={ChangePage}
          Resume={appState.Resume}
          CurrentPage={appState.CurrentPage}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                CurrentPage={appState.CurrentPage}
                Resume={appState.Resume}
                SetSection={SetSection}
              />
            }
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
