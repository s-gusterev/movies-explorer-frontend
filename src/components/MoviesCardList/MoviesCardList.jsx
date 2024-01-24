import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {
  const renderElement =
    props.arr.length > 0 &&
    props.arr.length !== props.nextMovies &&
    props.arr.length > props.nextMovies;

  // const isLiked = props.isLike(props.movie);

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
            movie={card}
            key={card.id}
            link={card.image.url}
            title={card.nameRU}
            time={card.duration}
            trailerLink={card.trailerLink}
            onSaveMovie={props.onSaveMovie}
            isLike={props.isLike}
            onDeleteMovie={props.onDeleteMovie}
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
