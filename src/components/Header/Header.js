import React from 'react';
import './Header.css'
import logo from '../../images/logo.svg'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__container" href="#">
        <img className="header__logo" src={logo} alt="Hacker News"/>
        <p className="header__text">
          Hacker News
        </p>
      </Link>
    </header>
  );
}

export default Header;
