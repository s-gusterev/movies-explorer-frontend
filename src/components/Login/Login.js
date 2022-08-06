import React from 'react';
import Logo from '../Logo/Logo';
import ContainerLoginRegistr from '../ContainerLoginRegistr/ContainerLoginRegistr';
import TitleLoginRegistr from '../TitleLoginRegistr/TitleLoginRegistr';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import ParagraphLoginRegist from '../ParagraphLoginRegist/ParagraphLoginRegist';

const Login = () => {
  return (
    <ContainerLoginRegistr>
      <Logo className='login-registr__logo' />
      <TitleLoginRegistr
        title='Рады видеть!'
        className='login-registr__title'
      />
      <Form>
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
          text='Войти'
          className='login-registr__button login-registr__button_type_false'
        />
      </Form>
      <ParagraphLoginRegist
        text='Ещё не зарегистрированы?'
        linkText='Регистрация'
        link='/'
      />
    </ContainerLoginRegistr>
  );
};

export default Login;
