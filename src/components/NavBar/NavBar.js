import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div id="navBar">
      <NavLink to="/" className="menuTile">
        Home
      </NavLink>
      <NavLink to="/meditation_sessions" className="menuTile">
        Sessions
      </NavLink>
      <NavLink to="/timer" className="menuTile">
        Timer
      </NavLink>
      <NavLink to="/resources" className="menuTile">
        Resources
      </NavLink>
    </div>
  );
};

export default NavBar;
