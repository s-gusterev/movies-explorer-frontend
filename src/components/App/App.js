import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Registr from '../Registr/Registr';
import Login from '../Login/Login';
const App = () => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <main className='main'>
        {/* <Main /> */}
        {/* <Movies /> */}
        {/* <SavedMovies /> */}
        {/* <Profile name='Виталий' email='pochta@yandex.ru' /> */}
        {/* <Registr /> */}
        <Login />
      </main>

      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default App;
