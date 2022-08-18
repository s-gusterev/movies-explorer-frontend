import React from 'react';
import './SearchForm.css';

const SearchForm = ({
  onSubmit,
  valueRef,
  checked,
  chengeCheckbox,
  search,
  onChange,
  onFocus,
  onBlur,
  visibleError,
  errorMessage,
}) => {
  return (
    <form className='search movies__search' onSubmit={onSubmit}>
      <div className='search__search-container'>
        <input
          type='search'
          name='searc-film'
          className='search__input'
          placeholder='Фильм'
          required
          ref={valueRef}
          value={search}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <span
          className={`${
            visibleError ? 'search__error search__error_hide' : 'search__error'
          }`}
        >
          {errorMessage}
        </span>
        <button type='submit' className='search__button'></button>
      </div>
      <div className='search__checkbox-container'>
        <input
          className='search__checkbox'
          type='checkbox'
          id='film-check'
          checked={checked}
          onChange={chengeCheckbox}
        />
        <label className='search__label' htmlFor='film-check'>
          Короткометражки
        </label>
      </div>
    </form>
  );
};

export default SearchForm;
