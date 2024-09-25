import React from 'react';
import './Content.css';

const Content = ({ title, textArray }) => {
  return (
    <div className="content">
      <h1>{title}</h1>
      {textArray.map((text, index) => (
        <words key={index}>{text}</words> 
      ))}
    </div>
  );
};

export default Content;
