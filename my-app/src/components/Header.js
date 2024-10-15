import React from 'react';
import { FiAlignLeft ,FiHelpCircle ,FiSettings } from "react-icons/fi";
import './Header.css'; 

function Header({ toggleNavbar, isExpanded }) {
  return (
    <div className="header">
      <div className="menu_container">
        <button className="menu_button" onClick={toggleNavbar}>
           <FiAlignLeft size={24}/>
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
        <div className="header_icon_container" >
          <div className="header_icon_box"> 
             <FiHelpCircle size={24} />
          </div>
        </div>
        <div className="header_icon_container" >
           <div className="header_icon_box"> 
             <FiSettings size={24} />
           </div>
        </div>
        <div className="header_avatar_container">
           <div className="avatar_box"> 
              <a href="/About" target="_self" rel="noopener noreferrer">
                <img className="avatar_img"  src={require('../img/user.jpeg')} />
              </a>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
