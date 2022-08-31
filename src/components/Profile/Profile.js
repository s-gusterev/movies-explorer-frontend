import React, { useState, useEffect } from 'react';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { NAME_REGEX, EMAIL_REGEX } from '../../utils/variables';

const Profile = ({ logout, handleProfile, errorApi, messageApi }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [email, setEmail] = useState(currentUser.email);
  const [name, setName] = useState(currentUser.name);
  const [validEmail, setValidEmail] = useState(false);
  const [validName, setValidName] = useState(false);
  const [inputFocusEmail, setInputFocusEmail] = useState(false);
  const [inputFocusName, setInputFocusName] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorName, setErrorName] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const profileSubmit = (e) => {
    e.preventDefault();
    handleProfile({ name, email });
  };

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
    if (!validEmail) {
      setErrorEmail('Введите email');
      return;
    }
    setErrorEmail('Введено невалидное значение');
  }, [email]);

  useEffect(() => {
    setValidName(NAME_REGEX.test(name));
    if (!validName) {
      setErrorName(
        'Введите имя - прописные и строчные латинские и русские буквы'
      );
      return;
    }
    setErrorName('Введено невалидное значение');
  }, [name]);

  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
      <form className='profile__form' onSubmit={profileSubmit}>
        <div className='profile__info profile__info_type_true'>
          <label
            className='profile__item profile__item_type_true'
            htmlFor='name'
          >
            Имя
          </label>
          <input
            className='profile__item profile__item_type_false'
            name='name'
            id='name'
            type='text'
            value={name}
            onChange={handleChangeName}
            onFocus={() => setInputFocusName(true)}
            onBlur={() => setInputFocusName(false)}
          />

          {validName ||
            (inputFocusName && (
              <span className='profile__error profile__error_type_true'>
                {errorName}
              </span>
            ))}
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
            name='email'
            id='email'
            type='email'
            value={email}
            onChange={handleChangeEmail}
            onFocus={() => setInputFocusEmail(true)}
            onBlur={() => setInputFocusEmail(false)}
          />

          {validEmail ||
            (inputFocusEmail && (
              <span className='profile__error profile__error_type_false'>
                {errorEmail}
              </span>
            ))}
        </div>
        <p className='error-api'>{errorApi}</p>
        <p className='message-api'>{messageApi}</p>
        <button
          className='profile__button'
          type='submit'
          disabled={
            (currentUser.name === name && currentUser.email === email) ||
            !validEmail ||
            !validName
          }
        >
          Редактировать
        </button>
      </form>
      <button className='profile__logout' type='button' onClick={logout}>
        Выйти из аккаунта
      </button>
    </section>
  );
};

export default Profile;
