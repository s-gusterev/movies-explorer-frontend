import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <form className='search movies__search'>
      <div className='search__search-container'>
        <input
          type='search'
          name='searc-film'
          className='search__input'
          placeholder='Фильм'
          required
        />
        <button type='submit' className='search__button'></button>
      </div>
      <div className='search__checkbox-container'>
        <input className='search__checkbox' type='checkbox' id='film-check' />
        <label className='search__label' htmlFor='film-check'>
          Короткометражки
        </label>
      </div>
    </form>
  );
};

export default SearchForm;
