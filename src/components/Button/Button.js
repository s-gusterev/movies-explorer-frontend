import React from 'react';
import './Button.css';

const Button = ({ text, className }) => {
  return (
    <button type='submit' className={`button ${className}`}>
      {text}
    </button>
  );
};

export default Button;
