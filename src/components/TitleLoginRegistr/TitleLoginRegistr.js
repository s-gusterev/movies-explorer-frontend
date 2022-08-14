import React from 'react';
import './TitleLoginRegistr.css';

const TitleLoginRegistr = ({ title, className }) => {
  return <h1 className={`title-login-registr ${className}`}>{title}</h1>;
};

export default TitleLoginRegistr;
