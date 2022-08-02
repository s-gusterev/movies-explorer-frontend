import React from 'react';
import './Techs.css';
import { listTechs } from '../../utils/variables';
import TitlePrimary from '../TitlePrimary/TitlePrimary';
import TitleSecondary from '../TitleSecondary/TittleSecondary';

const Techs = () => {
  return (
    <section className='techs'>
      <div className='root__container'>
        <TitleSecondary
          tagName={'h2'}
          className='title-secondary techs__title-primary'
        >
          Технологии
        </TitleSecondary>
        <TitlePrimary
          tagName={'h3'}
          className='title-primary title-primary_color_primary title-primary_font-size_m techs__title-secondary'
        >
          7 технологий
        </TitlePrimary>
        <p className='techs__paragraph'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className='techs__list'>
          {listTechs.map((item, index) => (
            <li className='techs__item' key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Techs;
