import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Registr from "../Registr/Registr";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import api from "../../utils/MainApi";

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    id: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorApi, setErrorApi] = useState("");
  const [messageApi, setMessageApi] = useState("");

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    const user_id = localStorage.getItem("user_id");
    if (jwt) {
      api
        .getProfile(user_id)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
          if (
            location.pathname === "/movies-explorer-frontend/signin" ||
            location.pathname === "/movies-explorer-frontend/signup"
          ) {
            return history.push("/movies-explorer-frontend/movies");
          }
          history.push(location);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      const user_id = localStorage.getItem("user_id");
      api
        .getProfile(user_id)
        .then((res) => {
          setCurrentUser({
            name: res.name,
            email: res.email,
            id: res.id,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  const showError = (error) => {
    setErrorApi(error);
    setTimeout(() => setErrorApi(""), 3000);
  };

  const showOk = (message) => {
    setMessageApi(message);
    setTimeout(() => setMessageApi(""), 3000);
  };

  const handleLogin = ({ email, password }) => {
    return api
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user_id", data.data.id);
          tokenCheck();
          history.push("/movies-explorer-frontend/movies");
        }
      })

      .catch((err) => {
        console.log(err);
        if (err === 401) {
          showError("Неправильный email или пароль");
        } else if (err === 400) {
          showError("Ошибка валидации - проверьте введенные данные");
        }
      });
  };

  const handleRegister = ({ name, email, password }) => {
    return api
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        if (err === 409) {
          return showError(
            "Пользователь с указанным email уже зарегистрирован"
          );
        }
        console.log(err);
      });
  };

  const profileSubmit = ({ name, email }) => {
    const user_id = localStorage.getItem("user_id");
    return api
      .editProfile(name, email, user_id)
      .then((res) => {
        showOk("Данные успешно изменены");
        setCurrentUser({
          ...currentUser,
          name: res.name,
          email: res.email,
        });
      })
      .catch((err) => {
        if (err === 409) {
          return showError(
            "Пользователь с указанным email уже зарегистрирован"
          );
        }
        console.log(err);
      });
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/movies-explorer-frontend/");
    localStorage.removeItem("search");
    localStorage.removeItem("shortFilms");
    localStorage.removeItem("movies");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/movies-explorer-frontend/">
          <Header loggedIn={loggedIn} />
        </Route>
        <ProtectedRoute
          path="/movies-explorer-frontend/movies"
          loggedIn={loggedIn}
          component={Header}
        />
        <ProtectedRoute
          path="/movies-explorer-frontend/saved-movies"
          loggedIn={loggedIn}
          component={Header}
        />
        <ProtectedRoute
          path="/movies-explorer-frontend/profile"
          loggedIn={loggedIn}
          component={Header}
        />
      </Switch>

      <main className="main">
        <Switch>
          <Route exact path="/movies-explorer-frontend">
            <Main />
          </Route>
          <ProtectedRoute
            path="/movies-explorer-frontend/movies"
            loggedIn={loggedIn}
            component={Movies}
          />
          <ProtectedRoute
            path="/movies-explorer-frontend/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
          />
          <ProtectedRoute
            path="/movies-explorer-frontend/profile"
            logout={logout}
            handleProfile={profileSubmit}
            loggedIn={loggedIn}
            component={Profile}
            errorApi={errorApi}
            messageApi={messageApi}
          />
          <Route path="/movies-explorer-frontend/signup">
            <Registr handleRegister={handleRegister} errorApi={errorApi} />
          </Route>
          <Route path="/movies-explorer-frontend/signin">
            <Login handleLogin={handleLogin} errorApi={errorApi} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Switch>
        <Route exact path="/movies-explorer-frontend/">
          <Footer />
        </Route>
        <ProtectedRoute
          path="/movies-explorer-frontend/movies"
          loggedIn={loggedIn}
          component={Footer}
        />
        <ProtectedRoute
          path="/movies-explorer-frontend/saved-movies"
          loggedIn={loggedIn}
          component={Footer}
        />
      </Switch>
    </CurrentUserContext.Provider>
  );
};

export default App;
