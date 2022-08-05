import React from 'react';
import './MoviesCard.css';

const MoviesCard = ({ link, title, time, like }) => {
  return (
    <li className='movie-card'>
      <img className='movie-card__image' src={link} alt={title} />
      <div className='movie-card__description'>
        <h2 className='movie-card__title'>{title}</h2>
        <button
          className={`movie-card__like ${
            like ? 'movie-card__like_active' : ''
          }`}
          type='button'
        ></button>
        <p className='movie-card__time'>{time}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
