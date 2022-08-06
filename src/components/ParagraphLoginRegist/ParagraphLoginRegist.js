import React from 'react';
import './ParagraphLoginRegist.css';

const ParagraphLoginRegist = ({ text, linkText, link }) => {
  return (
    <p className='paragraph-login-regist'>
      {text}
      <a className='paragraph-login-regist__link' href={link}>
        {linkText}
      </a>
    </p>
  );
};

export default ParagraphLoginRegist;
