import React, { useState } from 'react';
import './Navbar.css';
import '../App.css';

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false); // 初始状态为不扩展

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded); // 切换状态
  };

  return (
    <div className={`navbar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="main_buttonbox">
        <button className="main_button" onClick={toggleNavbar}>
          {isExpanded ? '收起' : '展开'}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
