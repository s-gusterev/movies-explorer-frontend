import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  let location = useLocation();
  let navigation;

  if (
    location.pathname === '/movies' ||
    location.pathname === '/saved-movies' ||
    location.pathname === '/profile'
  ) {
    navigation = (
      <React.Fragment>
        <nav className='navigation__link-movie-block'>
          <Link
            to='/movies'
            className='navigation__link-movie navigation__link-movie_type_true'
          >
            Фильмы
          </Link>
          <Link
            to='/saved-movies'
            className='navigation__link-movie navigation__link-movie_type_false'
          >
            Сохранённые фильмы
          </Link>
        </nav>
        <nav className='navigation-auth'>
          <Link className='navigation-auth__link-account' to='/profile'>
            Аккаунт
          </Link>
        </nav>
      </React.Fragment>
    );
  }
  if (location.pathname === '/') {
    navigation = (
      <nav className='navigation-auth'>
        <Link
          className='navigation-auth__link navigation-auth__link_type_signin'
          to='/signup'
        >
          Регистрация
        </Link>
        <Link
          className='navigation-auth__link navigation-auth__link_type_signup'
          to='/signin'
        >
          Войти
        </Link>
      </nav>
    );
  }
  return navigation;
};

export default Navigation;
