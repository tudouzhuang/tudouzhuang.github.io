import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Tips from '../components/Tips';
import Self_intro from '../components/Self_intro';
import Sidebar from '../components/Sidebar';
import CustomComponent from '../components/Preview_article';

function Home() {
  const navigate = useNavigate(); 

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <div class="main-layin">
        <Header />
        <Tips />
        <div class="content-double_column">
        <CustomComponent imagePath={require('../img/article.png')}/>
        <CustomComponent imagePath={require('../img/article.png')}/>
        </div>
        <div class="content-double_column">
        <CustomComponent imagePath={require('../img/article.png')}/>
        <CustomComponent imagePath={require('../img/article.png')}/>
        </div>
        </div>
        <div className="flex_profile">
          <Self_intro />
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Home;
