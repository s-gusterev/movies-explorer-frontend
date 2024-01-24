import React from 'react';
import './TitleSecondary.css';

const TitleSecondary = ({ tagName, children, ...props }) => {
  return React.createElement(tagName, props, children);
};

export default TitleSecondary;
