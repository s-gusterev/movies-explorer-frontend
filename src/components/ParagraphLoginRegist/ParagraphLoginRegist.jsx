import React from 'react';
import './ParagraphLoginRegist.css';
import { Link } from 'react-router-dom';

const ParagraphLoginRegist = ({ text, linkText, link }) => {
  return (
    <p className='paragraph-login-regist'>
      {text}
      <Link className='paragraph-login-regist__link' to={link}>
        {linkText}
      </Link>
    </p>
  );
};

export default ParagraphLoginRegist;
