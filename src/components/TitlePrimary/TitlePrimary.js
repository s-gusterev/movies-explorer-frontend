import React from 'react';
import './TitlePrimary.css';

const TitlePrimary = ({ tagName, children, ...props }) => {
  return React.createElement(tagName, props, children);
};

export default TitlePrimary;
