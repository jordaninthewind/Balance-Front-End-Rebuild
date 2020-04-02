import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Grid, CssBaseline } from '@material-ui/core';
import { withAuth, AuthUserContext } from './components/FirebaseSession';

import Navigation from "./components/Navigation/Navigation";
import MeditationSessionsContainer from "./containers/MeditationSessionsContainer";
import TimerContainer from "./containers/TimerContainer";
import UserLoginContainer from "./containers/UserLoginContainer";
import ResourcesContainer from "./containers/ResourcesContainer";
import Footer from "./components/Footer/Footer";
import { Lost } from "./components/Lost";
import "./App.scss";

class App extends React.Component {
  static contextType = AuthUserContext;
  render() {
    return (
      <>
        <Navigation />
        <CssBaseline />
        <Container fixed>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            maxHeight="80vh"
          >
            <Switch>
              <Route exact path="/"
                component={UserLoginContainer}
              />
              <Route
                path="/meditation_sessions"
                render={(props) => <MeditationSessionsContainer {...props} currentUser={this.context} />}
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
            <Footer user={this.context} />
          </Grid>
        </Container>
      </>
    );
  }
}


export default withAuth(App);