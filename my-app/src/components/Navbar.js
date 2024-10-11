import React from 'react';
import './Navbar.css';
import '../App.css';

function Navbar({ toggleNavbar, isExpanded }) {
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
