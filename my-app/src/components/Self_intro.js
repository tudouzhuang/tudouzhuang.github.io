import React, { useState } from 'react';
import './Self_intro.css';

function Self_intro() {
  const [isCollapsed, setIsCollapsed] = useState(true); // 状态管理

  // 切换收起和展开
  const toggleProfile = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`user-profile ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="arrow" onClick={toggleProfile}>
        {isCollapsed ? '←' : '→'} {/* 箭头符号 */}
      </div>
      {!isCollapsed && ( // 根据状态条件渲染用户信息
        <div className="user-info">
          <img src={require('../img/user.jpeg')} alt="User's profile" className="user-avatar" />
          <h2>Tudouzhuang</h2>
        </div>
      )}
    </div>
  );
}

export default Self_intro;
