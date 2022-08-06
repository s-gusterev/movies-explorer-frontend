import React from 'react';
import './Profile.css';

const Profile = ({ name, email }) => {
  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {name}!</h1>
      <div className='profile__info profile__info_type_true'>
        <p className='profile__item profile__item_type_true'>Имя</p>
        <p className='profile__item profile__item_type_false'>{name}</p>
      </div>
      <div className='profile__info profile__info_type_false'>
        <p className='profile__item profile__item_type_true'>E-mail</p>
        <p className='profile__item profile__item_type_false'>{email}</p>
      </div>

      <button className='profile__button' type='button'>
        Редактировать
      </button>
      <a className='profile__logout' href=''>
        Выйти из аккаунта
      </a>
    </section>
  );
};

export default Profile;
