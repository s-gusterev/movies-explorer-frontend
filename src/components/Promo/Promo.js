import React from 'react';
import './Promo.css';
import TitlePrimary from '../TitlePrimary/TitlePrimary';

const Promo = () => {
  return (
    <section className='promo'>
      <TitlePrimary
        tagName={'h1'}
        className='title-primary title-primary_color_seconary title-primary_font-size_l promo__title'
      >
        Учебный проект студента факультета Веб-разработки.
      </TitlePrimary>
    </section>
  );
};

export default Promo;
