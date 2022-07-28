import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container root__container'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
