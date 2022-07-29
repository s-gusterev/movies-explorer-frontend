import React from 'react';
import './Techs.css';
import { listTechs } from '../../utils/variables';

const Techs = () => {
  return (
    <section className='techs'>
      <div className='root__container'>
        <h2 className='title-secondary techs__title-primary'>Технологии</h2>
        <h3 className='title-primary title-primary_color_primary techs__title-secondary'>
          7 технологий
        </h3>
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
