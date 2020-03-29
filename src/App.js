import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import MeditationSessionsContainer from "./containers/MeditationSessionsContainer";
import TimerContainer from "./containers/TimerContainer";
import UserLoginContainer from "./containers/UserLoginContainer";
import ResourcesContainer from "./containers/ResourcesContainer";
import Footer from "./components/Footer/Footer";
import { Lost } from "./components/Lost";
import { withAuth } from './components/FirebaseSession';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div className="container">
          <Switch>
            <Route exact path="/"
              component={UserLoginContainer}
            />
            <Route
              path="/meditation_sessions"
              component={MeditationSessionsContainer}
            />
            <Route 
              path="/timer" 
              component={TimerContainer}
            />
            <Route 
              path="/resources" 
              component={ResourcesContainer} 
            />
            <Route component={Lost} />
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}


export default withAuth(App);