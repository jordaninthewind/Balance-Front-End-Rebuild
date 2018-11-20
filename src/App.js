import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import TitleBar from './components/TitleBar.js';
import QuoteContainer from './containers/QuoteContainer';
import MeditationSessionsContainer from './containers/MeditationSessionsContainer';
import TimerContainer from './containers/TimerContainer';
import UserLoginContainer from './containers/UserLoginContainer';
import ResourcesContainer from './containers/ResourcesContainer';
import { Lost } from './components/Lost'
import { checkCurrentUserStorage } from './reducers/usersReducer';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.checkCurrentUserStorage();
  }

  render() {
    return (    
      <Router>
        <div className="App App-navbar">
          <TitleBar />
            <div>
              <Link to="/" className="menuTile">Home</Link>
              <Link to="/meditation_sessions" className="menuTile">Sessions</Link>
              <Link to="/timer" className="menuTile">Timer</Link>
              <Link to="/resources" className="menuTile">Resources</Link>
            </div>
            <Switch>
              <Route exact path="/" component={UserLoginContainer} />
              <Route exact path="/meditation_sessions" component={MeditationSessionsContainer} />
              <Route exact path="/timer" component={TimerContainer} />
              <Route exact path="/resources" component={ResourcesContainer} />
              <Route component={Lost} />
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
