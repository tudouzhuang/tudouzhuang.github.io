import React from 'react';
import { FiAlignLeft ,FiHelpCircle ,FiSettings, FiSearch, FiSliders } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import './Header.css'; 

function Header({ toggleNavbar, isExpanded }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/About');
  };
  return (
    <div className="header">
      <div className="menu_container">
        <button className="menu_button" onClick={toggleNavbar}>
           <FiAlignLeft size={24}/>
        </button>
        <img src={require('../img/blog title.png')} />
        <div className="img_container"></div>
      </div>
      <div className="searchbar_container">
          <div className="search-bar-box" >
              <div className="header_icon_container" >
                  <div className="header_icon_box_searchbox"> 
                    <FiSearch size={24} />
                  </div>
               </div>
               <input type="text" placeholder="搜索博客" className="search-bar" />
               <div className="header_icon_container" >
                  <div className="header_icon_box_searchbox"> 
                    <FiSliders size={24} />
                  </div>
               </div>
          </div>
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
           <div className="avatar_box" onClick={handleClick}> 
                <img className="avatar_img"  src={require('../img/user.jpeg')} />
           </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
