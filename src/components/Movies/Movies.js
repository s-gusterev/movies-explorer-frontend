import React, { useEffect, useState, useRef } from 'react';
import './Movies.css';
import '../SearchForm/SearchForm';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import api from '../../utils/MainApi';

import { SEARCH_REGEX } from '../../utils/variables';

const Movies = () => {
  const searchRef = useRef();

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [visiblePreloader, setVisiblePreloader] = useState(false);
  const [shortFilms, setShortFilms] = useState(false);
  const [next, setNext] = useState(0);
  const [notFoundError, setNotFoundError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [counter, setCounter] = useState(0);
  const [validSearch, setValidSearch] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [savedMovies, setSavedMovies] = useState([]);

  const checkLike = (movie) => {
    if (!filteredMovies) {
      return;
    }

    const isLiked = savedMovies.find((i) => i.movieId === movie.id);
    if (isLiked) {
      return true;
    }
    return false;
  };

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

  const searchSubmit = (e) => {
    e.preventDefault();
    const searchValue = SEARCH_REGEX.test(search);
    if (!searchValue) {
      setErrorMessage('Ошибка - введите ключевое слово');
      return;
    }
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
        if (err > 400) return setServerError(true);
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
    setValidSearch(SEARCH_REGEX.test(search));
    if (!validSearch) {
      setErrorMessage(
        'Введите ключевое слово - страну, год, название, режиссер'
      );
      return;
    }
    setErrorMessage('Введено невалидное значение');
  }, [search]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  useEffect(() => {
    api.getInitialCards().then((res) => {
      setSavedMovies(res);
    });
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

  const addMovie = (movie) => {
    api
      .addMovie(movie)
      .then((res) => {
        const newSavedFilm = res;
        setSavedMovies([newSavedFilm, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteMovie = (movie) => {
    const userMovie = savedMovies.find((i) => i.movieId === movie.id);
    const _id = userMovie._id;
    api
      .delMovies(_id)
      .then((res) => {
        const newSavedFilm = savedMovies.filter((i) => movie.id !== i.movieId);
        setSavedMovies(newSavedFilm);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='movies root__container'>
      {visiblePreloader && <Preloader />}

      <SearchForm
        onSubmit={searchSubmit}
        checked={shortFilms}
        chengeCheckbox={(e) => setShortFilms(e.target.checked)}
        search={search}
        onChange={(e) => setSearch(e.target.value)}
        valueRef={searchRef}
        onFocus={() => setSearchFocus(true)}
        onBlur={() => setSearchFocus(false)}
        visibleError={validSearch || !searchFocus}
        errorMessage={errorMessage}
      />
      <MoviesCardList
        arr={filteredMovies}
        nextMovies={next}
        onclickButton={handleMoreMovies}
        onSaveMovie={addMovie}
        isLike={checkLike}
        onDeleteMovie={deleteMovie}
      >
        {notFoundError && (
          <p className='movies__not-found'>Ничего не найдено</p>
        )}
        {serverError && (
          <p className='movies__not-found'>
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </p>
        )}
      </MoviesCardList>
    </div>
  );
};

export default Movies;
