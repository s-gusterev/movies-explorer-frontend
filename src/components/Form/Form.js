import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <form onSubmit={props.onSubmit} className='form'>
      {props.children}
    </form>
  );
};

export default Form;
