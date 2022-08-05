import React from 'react';
import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import { movieList } from '../../utils/variables';

const SavedMovies = () => {
  const filterArray = movieList.filter((item) => item.added === true);

  return (
    <div className='movies-save root__container'>
      {/* <Preloader /> */}
      <SearchForm />
      <ul className='movies-list movies-list_type_false'>
        {filterArray.map((card) => (
          <MoviesCard
            key={card.id}
            link={card.image}
            title={card.title}
            time={card.time}
            added={card.added}
          />
        ))}
      </ul>
    </div>
  );
};

export default SavedMovies;
