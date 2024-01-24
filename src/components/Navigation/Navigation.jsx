import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";

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
    document.addEventListener("mousedown", clickedOutside);
    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [visibleMobileMenu]);

  let location = useLocation();
  let navigation;

  if (
    location.pathname === "/movies-explorer-frontend/movies" ||
    location.pathname === "/movies-explorer-frontend/saved-movies" ||
    location.pathname === "/movies-explorer-frontend/profile" ||
    (location.pathname === "/movies-explorer-frontend/" && loggedIn)
  ) {
    navigation = (
      <React.Fragment>
        <nav className="navigation__link-movie-block">
          <NavLink
            to="/movies-explorer-frontend/movies"
            className="navigation__link-movie navigation__link-movie_type_false"
            activeClassName="navigation__link-movie navigation__link-movie_type_true"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/movies-explorer-frontend/saved-movies"
            className="navigation__link-movie navigation__link-movie_type_false"
            activeClassName="navigation__link-movie navigation__link-movie_type_true"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <nav className="navigation-auth">
          <Link
            className="navigation-auth__link-account"
            to="/movies-explorer-frontend/profile"
          >
            Аккаунт
          </Link>
          <button onClick={openMenu} className="navigation-button"></button>
        </nav>
        <nav
          ref={ref}
          className={`navigation-mobile ${
            visibleMobileMenu ? "navigation-mobile_visible" : ""
          } `}
        >
          <Link className="navigation-mobile__link" to="/" onClick={closeMenu}>
            Главная
          </Link>
          <NavLink
            className="navigation-mobile__link"
            activeClassName="navigation-mobile__link_active"
            to="/movies-explorer-frontend/movies"
            onClick={closeMenu}
          >
            Фильмы
          </NavLink>
          <NavLink
            className="navigation-mobile__link"
            activeClassName="navigation-mobile__link_active"
            to="/movies-explorer-frontend/saved-movies"
            onClick={closeMenu}
          >
            Сохранённые фильмы
          </NavLink>
          <NavLink
            className="navigation-mobile__account"
            to="/movies-explorer-frontend/profile"
            onClick={closeMenu}
          >
            Аккаунт
          </NavLink>
          <button
            onClick={closeMenu}
            className="navigation-mobile__button-close"
            type="button"
          ></button>
        </nav>
      </React.Fragment>
    );
  }
  if (location.pathname === "/movies-explorer-frontend/" && !loggedIn) {
    navigation = (
      <nav className="navigation-auth">
        <Link
          className="navigation-auth__link navigation-auth__link_type_signin"
          to="/movies-explorer-frontend/signup"
        >
          Регистрация
        </Link>
        <Link
          className="navigation-auth__link navigation-auth__link_type_signup"
          to="/movies-explorer-frontend/signin"
        >
          Войти
        </Link>
      </nav>
    );
  }
  return navigation;
};

export default Navigation;
