import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {
  const renderElement =
    props.arr.length > 0 &&
    props.arr.length !== props.nextMovies &&
    props.arr.length > props.nextMovies;

  return (
    <React.Fragment>
      <ul
        className={`movies-list ${
          renderElement
            ? 'movies-list_type_true'
            : 'movies-list_type_true movies-list_type_overflow_none '
        } `}
      >
        {props.arr.slice(0, props.nextMovies).map((card) => (
          <MoviesCard
            key={card.id}
            link={card.image.url}
            title={card.nameRU}
            time={card.duration}
            like={card.like}
            isLike={card.like}
          />
        ))}
      </ul>
      {props.children}
      {renderElement && (
        <button onClick={props.onclickButton} className='movies__button'>
          Ещё
        </button>
      )}
    </React.Fragment>
  );
};

export default MoviesCardList;
