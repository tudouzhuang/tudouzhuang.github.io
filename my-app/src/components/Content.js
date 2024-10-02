import React from 'react';
import './Content.css';

const Content = ({ title, textArray, updateDate, likes }) => {
  return (
    <div className="content">
      <h1>{title}</h1>
      <div className="blog-post-footer">
        <div className="footer-info">
          <p>本文最后更新于:{updateDate}&ensp;&ensp;&ensp;</p>
          <p>👍{likes} 点赞: 1</p>
        </div>
      </div>
      <h2></h2>
      {textArray.map((text, index) => (
        <words key={index}>{text}</words> 
      ))}
    </div>
  );
};

export default Content;
