import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import ContainerLoginRegistr from "../ContainerLoginRegistr/ContainerLoginRegistr";
import TitleLoginRegistr from "../TitleLoginRegistr/TitleLoginRegistr";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ParagraphLoginRegist from "../ParagraphLoginRegist/ParagraphLoginRegist";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../utils/variables";

const Login = ({ handleLogin, errorApi }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [inputFocusEmail, setInputFocusEmail] = useState(false);
  const [inputFocusPassword, setInputFocusPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin({ password, email });
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
    if (!validEmail) {
      setErrorEmail("Введите email");
      return;
    }
    setErrorEmail("Введено невалидное значение");
  }, [email]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    if (!validPassword) {
      setErrorPassword(
        "Введите пароль - прописные и строчные латинские буквы, цифры"
      );
      return;
    }
    setErrorPassword("Введено невалидное значение");
  }, [password]);

  return (
    <ContainerLoginRegistr>
      <Logo className="login-registr__logo" />
      <TitleLoginRegistr
        title="Рады видеть!"
        className="login-registr__title"
      />
      <Form onSubmit={handleSubmit}>
        <Input
          label="E-mail"
          placeholder="E-mail"
          id="input-email"
          name="email"
          type="email"
          className="login-registr__input login-registr__input_type_true"
          error={errorEmail}
          value={email}
          onChange={handleChangeEmail}
          visibleError={validEmail || !inputFocusEmail}
          onFocus={() => setInputFocusEmail(true)}
          onBlur={() => setInputFocusEmail(false)}
        />
        <Input
          label="Пароль"
          placeholder="Пароль"
          id="input-password"
          name="password"
          type="password"
          className="login-registr__input login-registr__input_type_false"
          error={errorPassword}
          value={password}
          onChange={handleChangePassword}
          visibleError={validPassword || !inputFocusPassword}
          onFocus={() => setInputFocusPassword(true)}
          onBlur={() => setInputFocusPassword(false)}
        />
        <Button
          text="Войти"
          className="login-registr__button login-registr__button_type_false"
          disabled={!validEmail || !validPassword}
        />
      </Form>
      <ParagraphLoginRegist
        text="Ещё не зарегистрированы?"
        linkText="Регистрация"
        link="/movies-explorer-frontend/signup"
      />
      <p className="error-api">{errorApi}</p>
    </ContainerLoginRegistr>
  );
};

export default Login;
