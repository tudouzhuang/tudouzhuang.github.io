import React from 'react';
import { FiAlignLeft } from "react-icons/fi";
import './Header.css'; 

function Header({ toggleNavbar, isExpanded }) {
  return (
    <div className="header">
      <div className="menu_container">
        <button className="menu_button" onClick={toggleNavbar}>
           <FiAlignLeft size={48}/>
        </button>
        <div className="img_container"></div>
      </div>
      <div className="searchbar_container">
          <input
            type="text"
            placeholder="..."
            className="search-bar"
          />
      </div>
      <div className="selfprofile_contianer">
        sadsad
      </div>
    </div>
  );
}

export default Header;
