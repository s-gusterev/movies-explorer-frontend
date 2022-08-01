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
            className='title-primary title-primary_color_primary about-me__name'
          >
            Сергей
          </TitlePrimary>

          {/* <h3 className='title-primary title-primary_color_primary about-me__name'></h3> */}
          <p className='about-me__specialty'>Фронтенд-разработчик, 35 лет</p>
          <p className='about-me__description'>
            Я родился и живу в Ярославле. Первую книгу по HTML купил в 2008
            году, и с тех пор увлекаюсь созданием сайтов. После того, как прошёл
            курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
            постоянной работы.
          </p>
          <div className='about-me__links'>
            {' '}
            <a href='' className='about-me__link-social'>
              Github
            </a>
            <a href='' className='about-me__link-social'>
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
