import React from 'react';
import './AboutMe.css';
import aboutPhoto from '../../images/about-me.jpg';

const AboutMe = () => {
  return (
    <section className='about-me root__container'>
      <h2 className='title-secondary about-me__title'>Студент</h2>
      <div className='about-me__info'>
        <div className='about-me__text'>
          <h3 className='title-primary title-primary_color_primary about-me__name'>
            Сергей
          </h3>
          <p className='about-me__specialty'>Фронтенд-разработчик, 35 лет</p>
          <p className='about-me__description'>
            Я родился и живу в Ярославле. Первую книгу по HTML купил в 2008
            году, и с тех пор увлекаюсь созданием сайтов. После того, как прошёл
            курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
            постоянной работы.
          </p>
          <a href='' className='about-me__link-social'>
            Github
          </a>
        </div>
        <img className='about-me__img' src={aboutPhoto} alt='Фото профиля' />
      </div>
    </section>
  );
};

export default AboutMe;
