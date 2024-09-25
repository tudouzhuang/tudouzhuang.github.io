import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../App.css';
import Home from '../pages/Home';

function Navbar() {
  return (
    <div className="navbar">
      <div class="centered-x"></div>
      <ul>
        <li>
          <Link to="/"><img class="img-container" src={require('../img/user.jpeg')} alt="用户头像" /></Link>
        </li>
        <li className="centered-x navber_element" style={{ height: '20px' }}>{/* 这个是头像和下面选项中间留个间隔 */}
        </li>
        <li class="centered-x navber_element">
          <Link to="/Home">主页</Link>
        </li>
        <li class="centered-x navber_element">
          <Link to="/contact">联系</Link>
        </li>
        <li class="centered-x navber_element">
          <Link to="/about">关于</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
