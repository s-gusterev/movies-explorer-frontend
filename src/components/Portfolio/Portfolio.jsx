import React from 'react';
import './Portfolio.css';
import { linksPortfolio } from '../../utils/variables';

const Portfolio = () => {
  return (
    <section className='portfolio root__container'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        {linksPortfolio.map(({ name, link }, index) => (
          <li className='portfolio__item' key={index}>
            <a href={link} className='portfolio__link' target='_blank'>
              <span className='portfolio__link-name'> {name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
