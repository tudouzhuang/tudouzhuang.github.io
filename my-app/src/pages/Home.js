import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Content from '../components/Content';
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
        <div>
        <Header />
        <Tips />
        <CustomComponent imagePath={require('../img/article.png')}/>
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
