// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="recommendations">
        <h2>推荐</h2>
        <ul>
          <li>推荐内容 1</li>
          <li>推荐内容 2</li>
          <li>推荐内容 3</li>
          <li>推荐内容 4</li>
        </ul>
      </div>
      <div className="daily-ranking">
        <h2>每日排行</h2>
        <ol>
          <li>排行 1</li>
          <li>排行 2</li>
          <li>排行 3</li>
          <li>排行 4</li>
        </ol>
      </div>
    </div>
  );
};

export default Sidebar;
