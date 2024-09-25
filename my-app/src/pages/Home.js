import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Content from '../components/Content';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Tips from '../components/Tips';
import All_text from '../TextData';  // 导入文本数据
import Self_intro from '../components/Self_intro';

function Home() {
  const navigate = useNavigate(); 

  return (
    <div>
      <Header />
      <Navbar />
      <div className="centered-x">
        <div>
          <Tips />
          <Content title="my blog" textArray={All_text.blogContent} /> {/* 传递文本数组 */}
        </div>
        <div class="flex_profile">
          <Self_intro />
        </div>
      </div>
    </div>
  );
}

export default Home;
