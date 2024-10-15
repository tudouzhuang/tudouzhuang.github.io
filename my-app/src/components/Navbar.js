import React from 'react';
import { FiHome } from "react-icons/fi";
import './Navbar.css';
import '../App.css';

function Navbar({ toggleNavbar, isExpanded, setIsExpanded }) {

  // 鼠标悬停时展开
  const handleMouseEnter = () => {
    if (!isExpanded) {
      setIsExpanded(true); // 展开
    }
  };

  // 鼠标离开时收起
  const handleMouseLeave = () => {
    if (isExpanded) {
      setIsExpanded(false); // 收起
    }
  };

  return (
    <div className={`navbar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className={`main_buttoncontainer ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <div className={`main_buttonbox ${isExpanded ? 'expanded' : 'collapsed'}`}>
          <button className="main_button" onClick={toggleNavbar}>
            {isExpanded ? '收起' : '展开'}
          </button>
        </div>
      </div>
      <div className={`totalicon_container ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <div className={`icon_container ${isExpanded ? 'expanded' : 'collapsed'}`}
          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a className="icon_box" href="/" target="_self" rel="noopener noreferrer"> 
              <FiHome size={24} />
            </a>
            <div className={`navbar_word ${isExpanded ? 'show' : ''}`}>首页</div>
        </div>
        <div
          className={`icon_container ${isExpanded ? 'expanded' : 'collapsed'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className={`icon_container ${isExpanded ? 'expanded' : 'collapsed'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >1</div>
        <div
          className={`icon_container ${isExpanded ? 'expanded' : 'collapsed'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >1</div>
      </div>
    </div>
  );
}

export default Navbar;
