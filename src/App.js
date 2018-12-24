import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { checkCurrentUserStorage } from './actions/actions';
import Header from './components/Header/Header.js';
import NavBar from './components/NavBar/NavBar';
import MeditationSessionsContainer from './containers/MeditationSessionsContainer';
import TimerContainer from './containers/TimerContainer';
import UserLoginContainer from './containers/UserLoginContainer';
import ResourcesContainer from './containers/ResourcesContainer';
import Footer from './components/Footer/Footer';
import { Lost } from './components/Lost';
import './App.css';

class App extends Component {
  
  componentDidMount() {
    this.props.checkCurrentUserStorage();
  }

  render() {
    return (
      <>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/" component={UserLoginContainer} />
          <Route path="/meditation_sessions" component={MeditationSessionsContainer} />
          <Route path="/timer" component={TimerContainer} />
          <Route path="/resources" component={ResourcesContainer} />
          <Route component={Lost} />
        </Switch>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkCurrentUserStorage: () => dispatch(checkCurrentUserStorage())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
