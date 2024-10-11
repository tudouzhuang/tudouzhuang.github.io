import React, { useState } from 'react';  // 导入 useState 用来管理状态
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HomeMainContent from '../components/Home_maincontent';

function Home() {
  const navigate = useNavigate(); 

  // 用来管理导航栏宽度的状态
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false); 

  // 切换导航栏宽度的函数
  const toggleNavbar = () => {
    setIsNavbarExpanded(prevState => !prevState);
  };

  return (
    <div className="background_container">
      <div className="home-container">
        <div className="header_container">
          <Header />
        </div>
        <div className="body_container">
          <div className="navbar_container">
            {/* 将切换函数传递给 Navbar */}
            <Navbar toggleNavbar={toggleNavbar} isExpanded={isNavbarExpanded} />
          </div>
          <div className="other_container">
            {/* 将导航栏状态传递给 HomeMainContent */}
            <HomeMainContent isNavbarExpanded={isNavbarExpanded} />
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
