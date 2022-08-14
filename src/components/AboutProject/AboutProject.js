import React from 'react';
import './AboutProject.css';
import TitleSecondary from '../TitleSecondary/TittleSecondary';

const AboutProject = () => {
  return (
    <section className='about-project root__container' id='about'>
      <TitleSecondary
        tagName={'h2'}
        className='title-secondary about-project__title'
      >
        О проекте
      </TitleSecondary>
      <ul className='about-project__stages'>
        <li className='about-project__stage'>
          <h3 className='about-project__stage-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__stage-description'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='about-project__stage'>
          <h3 className='about-project__stage-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__stage-description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className='about-project__stage-lines'>
        <div className='about-project__stage-line about-project__stage-line_type_true'>
          <h3 className='about-project__stage-line-title about-project__stage-line-title_type_true'>
            1 неделя
          </h3>
          <p className='about-project__stage-line-description'>Back-end</p>
        </div>
        <div className='about-project__stage-line about-project__stage-line_type_false'>
          <h3 className='about-project__stage-line-title about-project__stage-line-title_type_false'>
            4 недели
          </h3>
          <p className='about-project__stage-line-description'>Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
