import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div id="navBar">
      <Link to="/" className="menuTile">
        Home
      </Link>
      <Link to="/meditation_sessions" className="menuTile">
        Sessions
      </Link>
      <Link to="/timer" className="menuTile">
        Timer
      </Link>
      <Link to="/resources" className="menuTile">
        Resources
      </Link>
    </div>
  );
};

export default NavBar;
