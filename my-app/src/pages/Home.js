import React, { useState } from 'react';  // 导入 useState 用来管理状态
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HomeMainContent from '../components/Home_maincontent';

function Home() {
  const navigate = useNavigate(); 

  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false); 

  const toggleNavbar = () => {
    setIsNavbarExpanded(prevState => !prevState);
  };

  return (
    <div className="background_container">
      <div className="home-container">
        <div className="header_container">
          {/* 传递 toggleNavbar 和 isExpanded 属性 */}
          <Header toggleNavbar={toggleNavbar} isExpanded={isNavbarExpanded} />
        </div>
        <div className="body_container">
          <div className="navbar_container">
            {/* 传递 toggleNavbar, isExpanded 和 setIsNavbarExpanded */}
            <Navbar
              toggleNavbar={toggleNavbar}
              isExpanded={isNavbarExpanded}
              setIsExpanded={setIsNavbarExpanded}  // 将 setIsNavbarExpanded 传递到 Navbar
            />
          </div>
          <div className="other_container">
            <HomeMainContent />
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
