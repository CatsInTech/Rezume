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
      }
    }
  };
  ChangePage = CurrentPage => {
    this.setState({ CurrentPage });
  };
  render() {
    return (
      <div className="rezume">
        <Header
          ChangePage={this.ChangePage}
          CurrentPage={this.state.CurrentPage}
        />
        <Main CurrentPage={this.state.CurrentPage} Resume={this.state.Resume} />
      </div>
    );
  }
}

export default App;
