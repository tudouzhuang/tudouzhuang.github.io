// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
<div className="sidebar_container">
  <div className="sidebar">
    <div className="icon-container">
      {/* 在这里添加图标 */}
      <h2>图标区</h2>
      {/* 示例图标 */}
    </div>
    <div className="add-icon">
      <button>+</button> {/* 添加图标的按钮 */}
    </div>
    <div className="empty-space"></div> {/* 空白区域 */}
  </div>
</div>

  );
};

export default Sidebar;
