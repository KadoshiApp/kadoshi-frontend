import React from 'react';
import { NavLink } from 'react-router-dom';
import './logo.scss';

const Logo = () => {
  return (
    <div className="logo">
      <NavLink exact to="/">
        Kadoshi
      </NavLink>
    </div>
  );
};

export default Logo;
