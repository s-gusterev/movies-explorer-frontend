import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ loggedIn }) => {
  const [visibleMobileMenu, setVisibleMobileMenu] = useState(false);
  const ref = useRef();

  const openMenu = () => {
    setVisibleMobileMenu(true);
  };
  const closeMenu = () => {
    setVisibleMobileMenu(false);
  };

  useEffect(() => {
    const clickedOutside = (e) => {
      if (visibleMobileMenu && ref.current && !ref.current.contains(e.target)) {
        setVisibleMobileMenu(false);
      }
    };
    document.addEventListener('mousedown', clickedOutside);
    return () => {
      document.removeEventListener('mousedown', clickedOutside);
    };
  }, [visibleMobileMenu]);

  let location = useLocation();
  let navigation;

  if (
    location.pathname === '/movies' ||
    location.pathname === '/saved-movies' ||
    location.pathname === '/profile' ||
    (location.pathname === '/' && loggedIn)
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
          <button onClick={openMenu} className='navigation-button'></button>
        </nav>
        <nav
          ref={ref}
          className={`navigation-mobile ${visibleMobileMenu ? 'navigation-mobile_visible' : ''
            } `}
        >
          <Link className='navigation-mobile__link' to='/' onClick={closeMenu}>
            Главная
          </Link>
          <NavLink
            className='navigation-mobile__link'
            activeClassName='navigation-mobile__link_active'
            to='/movies'
            onClick={closeMenu}
          >
            Фильмы
          </NavLink>
          <NavLink
            className='navigation-mobile__link'
            activeClassName='navigation-mobile__link_active'
            to='/saved-movies'
            onClick={closeMenu}
          >
            Сохранённые фильмы
          </NavLink>
          <NavLink className='navigation-mobile__account' to='/profile' onClick={closeMenu}>
            Аккаунт
          </NavLink>
          <button
            onClick={closeMenu}
            className='navigation-mobile__button-close'
            type='button'
          ></button>
        </nav>
      </React.Fragment>
    );
  }
  if (location.pathname === '/' && !loggedIn) {
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
