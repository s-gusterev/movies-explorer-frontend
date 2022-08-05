import React from 'react';
import './Movies.css';
import '../SearchForm/SearchForm';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  return (
    <div className='movies root__container'>
      {/* <Preloader /> */}
      <SearchForm />
      <MoviesCardList />
    </div>
  );
};

export default Movies;
