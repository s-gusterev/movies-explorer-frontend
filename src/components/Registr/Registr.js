import React, { useState } from 'react';

import Logo from '../Logo/Logo';
import ContainerLoginRegistr from '../ContainerLoginRegistr/ContainerLoginRegistr';
import TitleLoginRegistr from '../TitleLoginRegistr/TitleLoginRegistr';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import ParagraphLoginRegist from '../ParagraphLoginRegist/ParagraphLoginRegist';

const Registr = ({ handleRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    handleRegister({ name, password, email });
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <ContainerLoginRegistr>
      <Logo className='login-registr__logo' />
      <TitleLoginRegistr
        title='Добро пожаловать!'
        className='login-registr__title'
      />
      <Form onSubmit={handleSubmit}>
        <Input
          label='Имя'
          placeholder='Имя'
          id='input-name'
          name='name'
          type='text'
          className='login-registr__input login-registr__input_type_true'
          value={name}
          onChange={handleChangeName}
        />
        <Input
          label='E-mail'
          placeholder='E-mail'
          id='input-email'
          name='email'
          type='email'
          className='login-registr__input login-registr__input_type_true'
          value={email}
          onChange={handleChangeEmail}
        />
        <Input
          label='Пароль'
          placeholder='Пароль'
          id='input-password'
          name='password'
          type='password'
          className='login-registr__input login-registr__input_type_false'
          value={password}
          onChange={handleChangePassword}
        />
        <Button
          text='Зарегистрироваться'
          className='login-registr__button login-registr__button_type_true'
          disabled={false}
        />
      </Form>
      <ParagraphLoginRegist
        text='Уже зарегистрированы?'
        linkText='Войти'
        link='/signin'
      />
    </ContainerLoginRegistr>
  );
};

export default Registr;
