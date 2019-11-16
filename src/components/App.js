import React, { Component } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

class App extends Component {
  state = {
    CurrentPage: "About"
  };
  ChangePage = CurrentPage => {
    this.setState({ CurrentPage });
  };
  render() {
    return (
      <>
        <Header
          ChangePage={this.ChangePage}
          CurrentPage={this.state.CurrentPage}
        />
        <Main CurrentPage={this.state.CurrentPage} />
      </>
    );
  }
}

export default App;
