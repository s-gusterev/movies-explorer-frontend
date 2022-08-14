import React from 'react';
import Logo from '../Logo/Logo';
import ContainerLoginRegistr from '../ContainerLoginRegistr/ContainerLoginRegistr';
import TitleLoginRegistr from '../TitleLoginRegistr/TitleLoginRegistr';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import ParagraphLoginRegist from '../ParagraphLoginRegist/ParagraphLoginRegist';

const Registr = () => {
  return (
    <ContainerLoginRegistr>
      <Logo className='login-registr__logo' />
      <TitleLoginRegistr
        title='Добро пожаловать!'
        className='login-registr__title'
      />
      <Form>
        <Input
          label='Имя'
          placeholder='Имя'
          id='input-name'
          name='name'
          type='text'
          className='login-registr__input login-registr__input_type_true'
          value=''
        />
        <Input
          label='E-mail'
          placeholder='E-mail'
          id='input-email'
          name='email'
          type='email'
          className='login-registr__input login-registr__input_type_true'
        />
        <Input
          label='Пароль'
          placeholder='Пароль'
          id='input-password'
          name='password'
          type='password'
          className='login-registr__input login-registr__input_type_false'
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
