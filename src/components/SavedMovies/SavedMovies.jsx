import React, { useEffect, useState } from "react";
import "./SavedMovies.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import api from "../../utils/MainApi";
import { SEARCH_REGEX } from "../../utils/variables";

const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortFilms, setShortFilms] = useState(false);
  const [validSearch, setValidSearch] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [notFoundError, setNotFoundError] = useState(false);

  const searchSubmit = (e) => {
    e.preventDefault();
    const searchValue = SEARCH_REGEX.test(search);
    if (!searchValue) {
      setErrorMessage("Ошибка - введите ключевое слово");
      return;
    }

    new Promise((resolve, reject) => {
      let filter;
      if (search) {
        const searchFilm = search.toLowerCase();
        filter = savedMovies.filter((item) => {
          return (
            String(item.nameEN).toLowerCase().includes(searchFilm) ||
            String(item.nameRU).toLowerCase().includes(searchFilm) ||
            String(item.country).toLowerCase().includes(searchFilm) ||
            String(item.description).toLowerCase().includes(searchFilm) ||
            String(item.director).toLowerCase().includes(searchFilm) ||
            String(item.year).toLowerCase().includes(searchFilm)
          );
        });
      }
      if (shortFilms) {
        filter = filter.filter((item) => item.duration <= 40);
      }

      resolve(filter);
    })
      .then((res) => {
        if (res.length === 0) {
          setNotFoundError(true);
        }
        if (res.length > 0) {
          setNotFoundError(false);
        }
        setFilteredMovies(res);
      })
      .catch((err) => console.log("ошибка"));
  };

  useEffect(() => {
    let filter = [];

    if (shortFilms) {
      filter = savedMovies.filter((item) => item.duration <= 40);
      setFilteredMovies(filter);
    }

    if (filter.length === 0) {
      setNotFoundError(false);
    }
    if (filter.length > 0) {
      setNotFoundError(false);
    }

    return () => setFilteredMovies([]);
  }, [shortFilms]);
  useEffect(() => {
    setValidSearch(SEARCH_REGEX.test(search));
    if (!validSearch) {
      setErrorMessage(
        "Введите ключевое слово - страну, год, название, режиссер"
      );
      return;
    }
    setErrorMessage("Введено невалидное значение");
  }, [search]);

  useEffect(() => {
    api.getInitialCards().then((res) => {
      setSavedMovies(res);
    });
  }, []);

  const deleteMovie = (movie) => {
    api
      .delMovies(movie.id)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c.id !== movie.id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="movies-save root__container">
      <SearchForm
        onSubmit={searchSubmit}
        checked={shortFilms}
        chengeCheckbox={(e) => setShortFilms(e.target.checked)}
        search={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setSearchFocus(true)}
        onBlur={() => setSearchFocus(false)}
        visibleError={validSearch || !searchFocus}
        errorMessage={errorMessage}
      />
      {savedMovies.length === 0 && (
        <p className="movies-save__notification">
          У вас нет сохраненных фильмов
        </p>
      )}
      {notFoundError && (
        <p className="movies-save__notification">
          По данному запросу нет результатов
        </p>
      )}
      <ul className="movies-list movies-list_type_false">
        {filteredMovies.length === 0 &&
          !notFoundError &&
          savedMovies.map((card) => (
            <MoviesCard
              key={card.id}
              link={card.image}
              title={card.nameRU}
              time={card.duration}
              trailerLink={card.trailerLink}
              isLike={() => {}}
              movie={card}
              onDeleteMovie={deleteMovie}
            />
          ))}
        {!notFoundError &&
          filteredMovies.map((card) => (
            <MoviesCard
              key={card._id}
              link={card.image}
              title={card.nameRU}
              time={card.duration}
              trailerLink={card.trailerLink}
              isLike={() => {}}
              movie={card}
              onDeleteMovie={deleteMovie}
            />
          ))}
      </ul>
    </div>
  );
};

export default SavedMovies;
