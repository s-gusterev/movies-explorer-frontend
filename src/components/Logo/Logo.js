import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import logo from '../../images/logo.svg';

const Logo = (props) => {
  return (
    <Link to='/' className={`logo ${props.className}`}>
      <img className='logo__img' src={logo} alt='Логотип' />
    </Link>
  );
};

export default Logo;
