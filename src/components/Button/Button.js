import React from 'react';
import './Button.css';

const Button = ({ text, className, disabled }) => {
  return (
    <button type='submit' className={`button ${className}`} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
