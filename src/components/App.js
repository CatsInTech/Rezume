import React, { Component } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

class App extends Component {
  state = {
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
  };
  ChangePage = CurrentPage => {
    this.setState({ CurrentPage });
  };
  SetSection = (Section, Content) => {
    this.setState({ Resume: { ...this.state.Resume, [Section]: Content } });
  };
  render() {
    return (
      <div className="rezume">
        <Header
          ChangePage={this.ChangePage}
          Resume={this.state.Resume}
          CurrentPage={this.state.CurrentPage}
        />
        <Main
          CurrentPage={this.state.CurrentPage}
          Resume={this.state.Resume}
          SetSection={this.SetSection}
        />
      </div>
    );
  }
}

export default App;
