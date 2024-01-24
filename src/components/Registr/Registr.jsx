import React, { useState, useEffect } from "react";

import Logo from "../Logo/Logo";
import ContainerLoginRegistr from "../ContainerLoginRegistr/ContainerLoginRegistr";
import TitleLoginRegistr from "../TitleLoginRegistr/TitleLoginRegistr";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ParagraphLoginRegist from "../ParagraphLoginRegist/ParagraphLoginRegist";
import { EMAIL_REGEX, PASSWORD_REGEX, NAME_REGEX } from "../../utils/variables";

const Registr = ({ handleRegister, errorApi }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validName, setValidName] = useState(false);
  const [inputFocusEmail, setInputFocusEmail] = useState(false);
  const [inputFocusPassword, setInputFocusPassword] = useState(false);
  const [inputFocusName, setInputFocusName] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorName, setErrorName] = useState("");
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

  useEffect(() => {
    setValidName(NAME_REGEX.test(name));
    if (!validName) {
      setErrorName("Введите имя - только русские или латинские символы");
      return;
    }
    setErrorName("Введено невалидное значение");
  }, [name]);

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
        title="Добро пожаловать!"
        className="login-registr__title"
      />
      <Form onSubmit={handleSubmit}>
        <Input
          label="Имя"
          placeholder="Имя"
          id="input-name"
          name="name"
          type="text"
          className="login-registr__input login-registr__input_type_true"
          value={name}
          onChange={handleChangeName}
          visibleError={validName || !inputFocusName}
          onFocus={() => setInputFocusName(true)}
          onBlur={() => setInputFocusName(false)}
          error={errorName}
        />
        <Input
          label="E-mail"
          placeholder="E-mail"
          id="input-email"
          name="email"
          type="email"
          className="login-registr__input login-registr__input_type_true"
          value={email}
          onChange={handleChangeEmail}
          visibleError={validEmail || !inputFocusEmail}
          onFocus={() => setInputFocusEmail(true)}
          onBlur={() => setInputFocusEmail(false)}
          error={errorEmail}
        />
        <Input
          label="Пароль"
          placeholder="Пароль"
          id="input-password"
          name="password"
          type="password"
          className="login-registr__input login-registr__input_type_false"
          value={password}
          onChange={handleChangePassword}
          visibleError={validPassword || !inputFocusPassword}
          onFocus={() => setInputFocusPassword(true)}
          onBlur={() => setInputFocusPassword(false)}
          error={errorPassword}
        />
        <Button
          text="Зарегистрироваться"
          className="login-registr__button login-registr__button_type_true"
          disabled={!validEmail || !validPassword || !validName}
        />
      </Form>
      <ParagraphLoginRegist
        text="Уже зарегистрированы?"
        linkText="Войти"
        link="/movies-explorer-frontend/signin"
      />
      <p className="error-api">{errorApi}</p>
    </ContainerLoginRegistr>
  );
};

export default Registr;
