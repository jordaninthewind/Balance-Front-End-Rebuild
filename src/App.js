import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import TitleBar from './components/TitleBar.js';
import QuoteContainer from './containers/QuoteContainer';
import MeditationSessionsContainer from './containers/MeditationSessionsContainer';
import TimerContainer from './containers/TimerContainer';
import UserLoginContainer from './containers/UserLoginContainer';
import ResourcesContainer from './containers/ResourcesContainer';
import { checkCurrentUserStorage } from './reducers/usersReducer';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.checkCurrentUserStorage();
  }

  render() {
    return (
        
        <Router>
        <div className="App">
          <TitleBar />
          <Switch>
            <div className="App-navbar">
              <Link to="/" className="menuTile">Home</Link>
              <Link to="/meditation_sessions" className="menuTile">Sessions</Link>
              <Link to="/timer" className="menuTile">Timer</Link>
              <Link to="/resources" className="menuTile">Resources</Link>
              <Route exact path="/" component={UserLoginContainer} />
              <Route exact path="/meditation_sessions" component={MeditationSessionsContainer} />
              <Route path="/timer" component={TimerContainer} />
              <Route path="/resources" component={ResourcesContainer} />
            </div>
          </Switch>
        <QuoteContainer />
        </div>
        </Router>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.usersReducer.currentUser,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkCurrentUserStorage: () => dispatch(checkCurrentUserStorage()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
