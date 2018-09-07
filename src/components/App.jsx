import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import OfferPage from "./OfferPage";
import DrivePage from "./DrivePage";
import DonatePage from "./DonatePage";
import MoveInsPage from "./MoveInsPage";
import MissionPage from "./MissionPage";
import AdminPage from "./AdminPage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/offer" component={OfferPage} />
          <Route path="/drive" component={DrivePage} />
          <Route path="/donate" component={DonatePage} />
          <Route path="/move-ins" component={MoveInsPage} />
          <Route path="/mission" component={MissionPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
