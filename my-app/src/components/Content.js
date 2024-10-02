import React from 'react';
import './Content.css';

const Content = ({ title, textArray, insights, updateDate, likes }) => {
  return (
    <div className="content">
      <h1>{title}</h1>
      <div className="blog-post-footer">
        <div className="insights">{insights}</div>
        <div className="footer-info">
          <span className="update-date">更新日期: {updateDate}</span>
          <span className="likes">👍 {likes} 点赞</span>
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
