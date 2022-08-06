import React from 'react';
import './AboutMe.css';
import aboutPhoto from '../../images/about-me.jpg';
import TitlePrimary from '../TitlePrimary/TitlePrimary';

const AboutMe = () => {
  return (
    <section className='about-me root__container'>
      <h2 className='title-secondary about-me__title'>Студент</h2>
      <div className='about-me__info'>
        <div className='about-me__text'>
          <TitlePrimary
            tagName={'h3'}
            className='title-primary title-primary_color_primary title-primary_font-size_m about-me__name'
          >
            Сергей
          </TitlePrimary>
          <p className='about-me__specialty'>Фронтенд-разработчик, 35 лет</p>
          <p className='about-me__description'>
            Я родился и живу в Ярославле. Первую книгу по HTML купил в 2008
            году, и с тех пор увлекаюсь созданием сайтов. После того, как прошёл
            курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
            постоянной работы.
          </p>
          <div className='about-me__links'>
            <a
              href='https://github.com/s-gusterev'
              className='about-me__link-social'
              target='_blank'
            >
              Github
            </a>
            <a
              href='https://t.me/se_gus'
              className='about-me__link-social'
              target='_blank'
            >
              Telegram
            </a>
          </div>
        </div>
        <img className='about-me__img' src={aboutPhoto} alt='Фото профиля' />
      </div>
    </section>
  );
};

export default AboutMe;
