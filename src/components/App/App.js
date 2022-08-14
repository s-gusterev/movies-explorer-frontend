import React from 'react';
import { Switch, Route } from 'react-router-dom';
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

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/'>
          <Header />
        </Route>
        <Route path='/movies'>
          <Header />
        </Route>
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
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies />
          </Route>
          <Route path='/profile'>
            <Profile name='Виталий' email='pochta@yandex.ru' />
          </Route>
          <Route path='/signup'>
            <Registr />
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
        <Route path='/movies'>
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <Footer />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default App;
