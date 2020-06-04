import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Grid, CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/Styles";
import { theme } from "./theme";

import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import ResourcesContainer from "./containers/ResourcesContainer";
import TimerContainer from "./containers/TimerContainer";
import UserLoginContainer from "./containers/UserLoginContainer";
import { withAuth, AuthUserContext } from "./components/FirebaseSession";
import { Lost } from "./components/Lost";
import "./App.scss";

class App extends React.Component {
  static contextType = AuthUserContext;
  render() {
    return (
      <>
        <MuiThemeProvider theme={theme}>
          <Navigation />
          <CssBaseline />
          <Container maxWidth="lg">
            <Grid container>
              <Switch>
                <Route exact path="/" component={UserLoginContainer} />
                <Route path="/timer" component={TimerContainer} />
                <Route path="/resources" component={ResourcesContainer} />
                <Route component={Lost} />
              </Switch>
            </Grid>
          </Container>
          <Footer user={this.context} />
        </MuiThemeProvider>
      </>
    );
  }
}

export default withAuth(App);
