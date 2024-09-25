import React from 'react';
import './Self_intro.css';

function Self_intro() {
  return (
    <div className="user-profile">
      <img src={require('../img/user.jpeg')} alt="User's profile" class="user-avatar"/>
      <div className="user-info">
        <h2>Tudouzhuang</h2>
      </div>
    </div>
  );
};

export default Self_intro;
