import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='root__container'>
        <p className='footer__description'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className='footer__copy'>
          <p className='footer__year'>© 2022</p>
          <ul className='footer__links'>
            <li className='footer__item'>
              <a href='' className='footer__link'>
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__item'>
              <a href='' className='footer__link'>
                Github
              </a>
            </li>
            <li className='footer__item'>
              <a href='' className='footer__link'>
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
