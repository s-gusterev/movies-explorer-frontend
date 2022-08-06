import React from 'react';
import './Logo.css';
import logo from '../../images/logo.svg';

const Logo = (props) => {
  return (
    <a href='/' className={`logo ${props.className}`}>
      <img className='logo__img' src={logo} alt='Логотип' />
    </a>
  );
};

export default Logo;
