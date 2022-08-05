import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { movieList } from '../../utils/variables';

const MoviesCardList = () => {
  return (
    <ul className='movies-list'>
      {movieList.map((card, index) => (
        <MoviesCard
          key={index}
          link={card.image}
          title={card.title}
          time={card.time}
          like={card.like}
        />
      ))}
    </ul>
  );
};

export default MoviesCardList;
