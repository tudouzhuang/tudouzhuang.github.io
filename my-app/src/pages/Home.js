import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Content from '../components/Content';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Home() {
  const navigate = useNavigate(); // 使用 useNavigate 钩子

  return (
    <div>
      <Content />
      <Header />
      <Navbar />
    </div>
  );
}

export default Home;
