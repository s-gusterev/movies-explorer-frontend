import React from 'react';
import './Input.css';
const Input = ({
  label,
  placeholder,
  id,
  name,
  type,
  className,
  value,
  error,
  onChange,
  visibleError,
  onFocus,
  onBlur,
}) => {
  return (
    <div className='input-container'>
      <label className='label' htmlFor={id}>
        {label}
      </label>
      <input
        className={`input  ${className}`}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <span
        className={`${visibleError ? 'input__error_hide' : 'input__error'}`}
      >
        {error}
      </span>
    </div>
  );
};

export default Input;
