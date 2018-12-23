import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div id="header">
      <img src="shambhala sun.png" alt="" />
      <div>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          B a l a n c e : M e d i t a t i o n
        </Link>
      </div>
    </div>
  );
};

export default Header;
