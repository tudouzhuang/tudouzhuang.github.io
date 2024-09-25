// src/components/Header.js
import React from 'react';
import './Header.css'; // 引入相关样式

function Header() {
  return (
    <div className="header">
      <input
        type="text"
        placeholder="搜索..."
        className="search-bar"
      />
    </div>
  );
}

export default Header;
