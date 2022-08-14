import React, { useEffect, useState } from 'react';
import './Movies.css';
import '../SearchForm/SearchForm';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';

const Movies = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [visiblePreloader, setVisiblePreloader] = useState(false);
  const [shortFilms, setShortFilms] = useState(false);
  const [next, setNext] = useState(0);

  function handleMoreMovies() {
    setNext(() => next + 3);
  }

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
        console.log(movies);
        let filtered = movies;
        console.log(filtered);
        if (search) {
          const searchFilm = search.toLowerCase();
          localStorage.setItem('search', searchFilm);
          filtered = filtered.filter((item) => {
            return String(item.country).toLowerCase().includes(searchFilm);
          });
        }

        if (shortFilms) {
          filtered = filtered.filter((item) => item.duration <= 40);
        }
        localStorage.setItem('movies', JSON.stringify(filtered));
        localStorage.setItem('shortFilms', shortFilms);
        setFilteredMovies(filtered);
        setNext(3);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setVisiblePreloader(false);
      });
  };

  useEffect(() => {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    let checked = JSON.parse(localStorage.getItem('shortFilms'));
    let search = localStorage.getItem('search') || '';

    setFilteredMovies(movies);

    setShortFilms(checked);
    setSearch(search);
    setNext(3);
    handleMoreMovies();
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
        {filteredMovies.length === 0 && <p>Ничего не найдено</p>}
      </MoviesCardList>
    </div>
  );
};

export default Movies;
