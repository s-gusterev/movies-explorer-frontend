import React from 'react';
import './Movies.css';
import '../SearchForm/SearchForm';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import SavedMovies from '../SavedMovies/SavedMovies';
import { movieList } from '../../utils/variables';

const Movies = () => {
  return (
    <div className='movies root__container'>
      {/* <Preloader /> */}
      <SearchForm />
      <MoviesCardList arr={movieList} />
    </div>
  );
};

export default Movies;
