import React from 'react';
import './MoviesCard.css';

const MoviesCard = ({ link, title, time, like, added, trailerLink }) => {
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
          src={`https://api.nomoreparties.co/${link}`}
          alt={title}
        />
      </a>

      <div className='movie-card__description'>
        <h2 className='movie-card__title'>{title}</h2>
        {!added ? (
          <button
            onClick={() => {
              console.log('click');
            }}
            className={`movie-card__like ${
              like ? 'movie-card__like_active' : ''
            }`}
            type='button'
          ></button>
        ) : (
          <button className='movie-card__delete' type='button'></button>
        )}
        <p className='movie-card__time'>{getTimeFromMins(time)}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
