import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = ({ name, email }) => {
  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {name}!</h1>
      <form className='profile__form'>
        <div className='profile__info profile__info_type_true'>
          <label
            className='profile__item profile__item_type_true'
            htmlFor='name'
          >
            Имя
          </label>
          <input
            className='profile__item profile__item_type_false'
            defaultValue={name}
            name='name'
            id='name'
            type='text'
          />
        </div>
        <div className='profile__info profile__info_type_false'>
          <label
            className='profile__item profile__item_type_true'
            htmlFor='email'
          >
            E-mail
          </label>
          <input
            className='profile__item profile__item_type_false'
            defaultValue={email}
            name='email'
            id='email'
            type='email'
          />
        </div>

        <button className='profile__button' type='submit' disabled>
          Редактировать
        </button>
      </form>
      <Link className='profile__logout' to='/'>
        Выйти из аккаунта
      </Link>
    </section>
  );
};

export default Profile;
