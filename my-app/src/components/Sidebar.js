import { FiStar, FiPenTool, FiPaperclip, FiInbox, FiGrid, FiPlusCircle } from "react-icons/fi";
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
<div className="sidebar_container">
  <div className="sidebar">
    <div className="icon-container">
      <div className="sidebar_icon_container" >
          <div  className="sidebar_icon_box">
            <FiStar size={24} />
          </div>
      </div>
      <div className="sidebar_icon_container" >
          <div  className="sidebar_icon_box">
            <FiPenTool size={24} />
          </div>
      </div>
      <div className="sidebar_icon_container" >
          <div  className="sidebar_icon_box">
            <FiPaperclip size={24} />
          </div>
      </div>
      <div className="sidebar_icon_container" >
          <div  className="sidebar_icon_box">
            <FiInbox size={24} />
          </div>
      </div>
      <div className="sidebar_icon_container" >
          <div  className="sidebar_icon_box">
            <FiGrid size={24} />
          </div>
      </div>
    </div>
    <div className="add-icon">
      <FiPlusCircle />
    </div>
    <div className="empty-space"></div>
  </div>
</div>

  );
};

export default Sidebar;
