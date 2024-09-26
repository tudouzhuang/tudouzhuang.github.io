import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Content from '../components/Content';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Tips from '../components/Tips';
import All_text from '../TextData';  // 导入文本数据
import Self_intro from '../components/Self_intro';
import Sidebar from '../components/Sidebar';

function Article() {
  const navigate = useNavigate(); 

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <div>
          <Header />
          <Tips />
          <Content title="为什么MXL需要自慰" textArray={All_text.blogContent} /> {/* 传递文本数组 */}
        </div>
        <div className="flex_profile">
          <Self_intro />
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Article;
