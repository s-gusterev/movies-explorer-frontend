import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Registr from '../Registr/Registr';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import api from '../../utils/MainApi';

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(loggedIn);

  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      setLoggedIn(true);
      history.push(location);
    }
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  const handleLogin = ({ email, password }) => {
    return api
      .authorize(email, password)
      .then((data) => {
        console.log(email, password);
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          tokenCheck();
          history.push('/movies');
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegister = ({ name, email, password }) => {
    return api
      .register(name, email, password)
      .then((res) => {
        handleLogin({ email, password });
        console.log(res);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  console.log(currentUser);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path='/'>
          <Header />
        </Route>
        <ProtectedRoute path='/movies' loggedIn={loggedIn} component={Header} />
        <Route path='/saved-movies'>
          <Header />
        </Route>
        <Route path='/profile'>
          <Header />
        </Route>
      </Switch>

      <main className='main'>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}
            component={Movies}
          />
          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            component={SavedMovies}
          />
          <Route path='/profile'>
            <Profile name={currentUser.name} email={currentUser.email} />
          </Route>
          <Route path='/signup'>
            <Registr handleRegister={handleRegister} />
          </Route>
          <Route path='/signin'>
            <Login />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Switch>
        <Route exact path='/'>
          <Footer />
        </Route>
        <ProtectedRoute path='/movies' loggedIn={loggedIn} component={Footer} />
        <Route path='/saved-movies'>
          <Footer />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
};

export default App;
