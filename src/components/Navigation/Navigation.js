import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
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
          <NavLink
            to='/movies'
            className='navigation__link-movie navigation__link-movie_type_false'
            activeClassName='navigation__link-movie navigation__link-movie_type_true'
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className='navigation__link-movie navigation__link-movie_type_false'
            activeClassName='navigation__link-movie navigation__link-movie_type_true'
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <nav className='navigation-auth'>
          <Link className='navigation-auth__link-account' to='/profile'>
            Аккаунт
          </Link>
          <button className='navigation-button'></button>
        </nav>
        <nav className='navigation-mobile'>
          <Link className='navigation-mobile__link' to='/'>
            Главная
          </Link>
          <NavLink
            className='navigation-mobile__link'
            activeClassName='navigation-mobile__link_active'
            to='/movies'
          >
            Фильмы
          </NavLink>
          <NavLink
            className='navigation-mobile__link'
            activeClassName='navigation-mobile__link_active'
            to='/saved-movies'
          >
            Сохранённые фильмы
          </NavLink>
          <NavLink className='navigation-mobile__account' to='/profile'>
            Аккаунт
          </NavLink>
          <button
            className='navigation-mobile__button-close'
            type='button'
          ></button>
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
