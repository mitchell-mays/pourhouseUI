import React, { Component } from "react";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <LoginForm />
      </React.Fragment>
    );
  }
}

export default App;
