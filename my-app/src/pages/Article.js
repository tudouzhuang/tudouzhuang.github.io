import React, { useState } from 'react'; // 导入 useState 用来管理状态
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Content from '../components/Content';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import All_text from '../TextData'; // 导入文本数据

function Article() {
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
          {/* 传递 toggleNavbar 和 isExpanded 属性 */}
          <Header toggleNavbar={toggleNavbar} isExpanded={isNavbarExpanded} />
        </div>
        <div className="body_container">
          <div className="navbar_container">
            {/* 传递 toggleNavbar, isExpanded 和 setIsExpanded */}
            <Navbar
              toggleNavbar={toggleNavbar}
              isExpanded={isNavbarExpanded}
              setIsExpanded={setIsNavbarExpanded}
            />
          </div>
          <div className="other_container">
            <Content title="语文经历" textArray={All_text.blogContent} />
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
