import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment>
      <h1 className="not-found-title">404</h1>
      <p className="not-found-description">Страница не найдена</p>
      <Link className="not-found-link" to="movies-explorer-frontend/movies">
        Назад
      </Link>
    </React.Fragment>
  );
};

export default NotFound;
