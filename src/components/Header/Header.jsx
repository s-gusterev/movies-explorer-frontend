import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ loggedIn }) => {
  const location = useLocation();
  return (
    <header
      className={`header ${
        location.pathname === '/' ? 'header_color_dark' : 'header_color_light'
      } `}
    >
      <div className='header__container root__container'>
        <Logo className='' />
        <Navigation loggedIn={loggedIn} />
      </div>
    </header>
  );
};

export default Header;
