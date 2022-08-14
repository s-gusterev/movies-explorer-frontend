import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {
  return (
    <React.Fragment>
      <ul className='movies-list movies-list_type_true'>
        {props.arr.map((card) => (
          <MoviesCard
            key={card.id}
            link={card.image}
            title={card.title}
            time={card.time}
            like={card.like}
            isLike={card.like}
          />
        ))}
      </ul>
      <button className='movies__button'>Ещё</button>
    </React.Fragment>
  );
};

export default MoviesCardList;
