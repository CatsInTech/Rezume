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
        ProfilePicture: {
          Set: false,
          ProfileImage:
            "https://cdn.nerdschalk.com/wp-content/uploads/2020/09/how-to-remove-profile-picture-on-zoom-12.png?width=150"
        }
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
    setAppState({
      ...appState,
      Resume: { ...appState.Resume, [Section]: Content }
    });
  };
  const SetSwitch = () => {
    setAppState({
      ...appState,
      Resume: {
        ...appState.Resume,
        About: {
          ...appState.Resume.About,
          ProfilePicture: {
            ...appState.Resume.About.ProfilePicture,
            Set: !(appState.Resume.About.ProfilePicture.Set)
          }
        }
      }
    })
  };
  const ImageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        setAppState({
          ...appState,
          Resume: {
            ...appState.Resume,
            About: {
              ...appState.Resume.About,
              ProfilePicture: {
                ...appState.Resume.About.ProfilePicture,
                ProfileImage: reader.result
              }
            }
          }
        })
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
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
        SetSection={SetSection}
        SetSwitch={SetSwitch}
        ImageHandler={ImageHandler}
      />
      <Footer />
    </div>
  );
};

export default App;
