import React from 'react';
import './Input.css';
const Input = ({ label, placeholder, id, name, type, className }) => {
  return (
    <React.Fragment>
      <label className='label' htmlFor={id}>
        {label}
      </label>
      <input
        className={`input ${className}`}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
      />
    </React.Fragment>
  );
};

export default Input;
