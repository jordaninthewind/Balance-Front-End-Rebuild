import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
import TitleBar from './components/TitleBar.js';
import QuoteContainer from './containers/QuoteContainer';
import MeditationSessionsContainer from './containers/MeditationSessionsContainer';
import TimerContainer from './containers/TimerContainer';
import UserSelectContainer from './containers/UserSelectContainer';
import ResourcesContainer from './containers/ResourcesContainer';
import SketchBoard from './components/SketchBoard';
import './App.css';

class App extends Component {

  render() {
    return (
        <div className="App">
          <TitleBar />
          <BrowserRouter>
            <div className="App-navbar">
              <Link to="/" className="menuTile">Home</Link>
              <Link to="/meditation_sessions" className="menuTile">Sessions</Link>
              <Link to="/timer" className="menuTile">Timer</Link>
              <Link to="/resources" className="menuTile">Resources</Link>
              <Link to="/sketchboard" className="menuTile"></Link>
              <Route exact path="/" component={UserSelectContainer} />
              <Route exact path="/meditation_sessions" component={MeditationSessionsContainer} />
              <Route path="/timer" component={TimerContainer} />
              <Route path="/resources" component={ResourcesContainer} />
              <Route path="/sketchboard" component={SketchBoard} />
            </div>
          </BrowserRouter>
        <QuoteContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.usersReducer.currentUser,
  }
}

export default connect(mapStateToProps, null)(App);
