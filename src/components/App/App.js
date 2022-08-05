import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className='main'>
        {/* <Main /> */}
        <Movies />
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default App;
