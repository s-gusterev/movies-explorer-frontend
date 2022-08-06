import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <React.Fragment>
      <h1 className='not-found-title'>404</h1>
      <p className='not-found-description'>Страница не найдена</p>
      <a className='not-found-link' href='/'>
        Назад
      </a>
    </React.Fragment>
  );
};

export default NotFound;
