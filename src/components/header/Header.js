import React from 'react';
import './Header.css'
import logo from '../../images/logo.svg'

function Header() {
  return (
    <header className='header'>
      <a className='header__container' href='#'>
        <img className='header__logo' src={logo} alt="Hacker News"/>
        <p className='header__text'>
          Hacker News
        </p>
      </a>
    </header>
  );
}

export default Header;
