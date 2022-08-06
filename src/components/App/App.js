import React from 'react';
import { Routes, Route, useRoutes } from 'react-router-dom';
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
  const HeaderRoutes = () => {
    return useRoutes([
      { path: '/', element: <Header /> },
      { path: '/movies', element: <Header /> },
      { path: '/saved-movies', element: <Header /> },
      { path: '/profile', element: <Header /> },
    ]);
  };
  const FooterRoutes = () => {
    return useRoutes([
      { path: '/', element: <Footer /> },
      { path: '/movies', element: <Footer /> },
      { path: '/saved-movies', element: <Footer /> },
      { path: '/profile', element: <Footer /> },
    ]);
  };

  return (
    <React.Fragment>
      <HeaderRoutes />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route
            path='/profile'
            element={<Profile name='Виталий' email='pochta@yandex.ru' />}
          />
          <Route path='/signup' element={<Registr />} />
          <Route path='/signin' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <FooterRoutes />
    </React.Fragment>
  );
};

export default App;
