import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__description'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className='footer__copy'>
          <p className='footer__year'>© 2022</p>
          <ul className='footer__links'>
            <li className='footer__item'>
              <a
                href='https://practicum.yandex.ru'
                className='footer__link'
                target='_blank'
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__item'>
              <a
                href='https://github.com/s-gusterev'
                className='footer__link'
                target='_blank'
              >
                Github
              </a>
            </li>
            <li className='footer__item'>
              <a
                href='https://t.me/se_gus'
                className='footer__link'
                target='_blank'
              >
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
