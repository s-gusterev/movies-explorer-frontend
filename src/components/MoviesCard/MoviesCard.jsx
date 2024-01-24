import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({
  link,
  title,
  time,
  trailerLink,
  onSaveMovie,
  movie,
  isLike,
  onDeleteMovie,
}) => {
  let location = useLocation();

  const isLiked = isLike(movie);

  const handleClickSaveMovie = () => {
    onSaveMovie(movie);
  };

  const handleClickDeleteMovie = () => {
    onDeleteMovie(movie);
  };

  const getTimeFromMins = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    if (hours === 0) {
      return minutes + 'м';
    } else if (minutes === 0) {
      return hours + 'ч';
    } else {
      return hours + 'ч ' + minutes + 'м';
    }
  };

  return (
    <li className='movie-card'>
      <a href={trailerLink} className='movie-card__link' target='_blank'>
        <img
          className='movie-card__image'
          src={
            location.pathname === '/movies'
              ? `https://api.nomoreparties.co/${link}`
              : link
          }
          alt={title}
        />
      </a>

      <div className='movie-card__description'>
        <h2 className='movie-card__title'>{title}</h2>
        {location.pathname === '/movies' ? (
          <button
            onClick={!isLiked ? handleClickSaveMovie : handleClickDeleteMovie}
            className={`movie-card__like ${
              isLiked ? 'movie-card__like_active' : ''
            }`}
            type='button'
          ></button>
        ) : (
          <button
            onClick={handleClickDeleteMovie}
            className='movie-card__delete'
            type='button'
          ></button>
        )}
        <p className='movie-card__time'>{getTimeFromMins(time)}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
