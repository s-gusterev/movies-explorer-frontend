import React, { useEffect, useState } from 'react';
import './Movies.css';
import '../SearchForm/SearchForm';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';

const Movies = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState(' ');
  const [visiblePreloader, setVisiblePreloader] = useState(false);
  const [shortFilms, setShortFilms] = useState(false);
  const [next, setNext] = useState(0);
  const [notFoundError, setNotFoundError] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [counter, setCounter] = useState(0);

  const handleMoreMovies = () => {
    return setNext(() => next + counter);
  };
  const handleResize = () => {
    setWidth(window.innerWidth);
    if (width >= 1280) {
      setNext(12);
      setCounter(3);
    }
    if (width <= 1199 && width > 689) {
      setNext(8);
      setCounter(2);
    }
    if (width <= 689) {
      setNext(5);
      setCounter(2);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  const searchSubmit = (e) => {
    e.preventDefault();
    setVisiblePreloader(true);
    moviesApi
      .getCardsMovies()
      .then((res) => {
        return new Promise((resolve, reject) => {
          resolve(res);
        });
      })
      .then((movies) => {
        let filtered = movies;

        if (search) {
          const searchFilm = search.toLowerCase();
          localStorage.setItem('search', searchFilm);
          filtered = filtered.filter((item) => {
            return (
              String(item.nameEN).toLowerCase().includes(searchFilm) ||
              String(item.nameRU).toLowerCase().includes(searchFilm) ||
              String(item.country).toLowerCase().includes(searchFilm) ||
              String(item.description).toLowerCase().includes(searchFilm) ||
              String(item.director).toLowerCase().includes(searchFilm) ||
              String(item.year).toLowerCase().includes(searchFilm)
            );
          });
          localStorage.setItem('movies', JSON.stringify(filtered));
        }
        if (shortFilms) {
          filtered = filtered.filter((item) => item.duration <= 40);
        }

        if (filtered.length === 0) {
          setNotFoundError(true);
        }
        if (filtered.length > 0) {
          setNotFoundError(false);
        }

        localStorage.setItem('shortFilms', shortFilms);
        setFilteredMovies(filtered);
      })
      .catch((err) => {
        setNotFoundError(true);
      })
      .finally(() => {
        setVisiblePreloader(false);
      });
  };

  useEffect(() => {
    let filtered = JSON.parse(localStorage.getItem('movies')) || [];
    if (shortFilms) {
      filtered = filtered.filter((item) => item.duration <= 40);
    }

    if (filtered.length === 0) {
      setNotFoundError(true);
    }
    if (filtered.length > 0) {
      setNotFoundError(false);
    }
    setFilteredMovies(filtered);
    return () => localStorage.setItem('shortFilms', shortFilms);
  }, [shortFilms]);

  useEffect(() => {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    let checked = JSON.parse(localStorage.getItem('shortFilms') || false);
    let search = localStorage.getItem('search') || '';
    setFilteredMovies(movies);
    setShortFilms(checked);

    setSearch(search);
    handleMoreMovies();
    handleResize();
    if (movies.length === 0) {
      setNotFoundError(false);
    }
  }, []);

  return (
    <div className='movies root__container'>
      {visiblePreloader && <Preloader />}

      <SearchForm
        onSubmit={searchSubmit}
        checked={shortFilms}
        chengeCheckbox={(e) => setShortFilms(e.target.checked)}
        search={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <MoviesCardList
        arr={filteredMovies}
        nextMovies={next}
        onclickButton={handleMoreMovies}
      >
        {notFoundError && (
          <p className='movies__not-found'>Ничего не найдено</p>
        )}
      </MoviesCardList>
    </div>
  );
};

export default Movies;
