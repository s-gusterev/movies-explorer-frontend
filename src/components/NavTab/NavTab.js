import React from 'react';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className='menu'>
      <ul className='menu__list'>
        <li className='menu__item'>
          <a href='' className='menu__link'>
            О проекте
          </a>
        </li>
        <li className='menu__item'>
          <a href='' className='menu__link'>
            Технологии
          </a>
        </li>
        <li className='menu__item'>
          <a href='' className='menu__link'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
