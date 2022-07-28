import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <React.Fragment>
      {/* <nav className='navigation__link-movie-block'>
        <a
          href=''
          className='navigation__link-movie navigation__link-movie_type_true'
        >
          Фильмы
        </a>
        <a
          href=''
          className='navigation__link-movie navigation__link-movie_type_false'
        >
          Сохранённые фильмы
        </a>
      </nav> */}
      <nav className='navigation-auth'>
        <a className='navigation__link navigation__link_type_signin' href='/'>
          Регистрация
        </a>
        <a className='navigation__link navigation__link_type_signup' href='/'>
          Войти
        </a>

        {/* <a className='navigation__link-account' href='/'>
          Аккаунт
        </a> */}
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
