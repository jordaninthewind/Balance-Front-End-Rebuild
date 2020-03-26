import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { checkCurrentUserStorage } from "./reducers/usersReducer";
import NavBar from "./components/NavBar/NavBar";
import MeditationSessionsContainer from "./containers/MeditationSessionsContainer";
import TimerContainer from "./containers/TimerContainer";
import UserLoginContainer from "./containers/UserLoginContainer";
import ResourcesContainer from "./containers/ResourcesContainer";
import Footer from "./components/Footer/Footer";
import { Lost } from "./components/Lost";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import "./App.scss";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

class App extends Component {
  // componentDidMount() {
  //   this.props.checkCurrentUserStorage();
  // }

  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" 
              component={UserLoginContainer} 
              user={this.props.user} 
              signInWithGoogle={this.props.signInWithGoogle} 
            />
            <Route
              path="/meditation_sessions"
              component={MeditationSessionsContainer}
            />
            <Route path="/timer" component={TimerContainer} />
            <Route path="/resources" component={ResourcesContainer} />
            <Route component={Lost} />
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     checkCurrentUserStorage: () => dispatch(checkCurrentUserStorage())
//   };
// };

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);

// export default connect(
//   null,
//   mapDispatchToProps
// )(App);
