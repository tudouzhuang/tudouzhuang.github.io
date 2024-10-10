import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HomeMainContent from '../components/Home_maincontent';


function Home() {
  const navigate = useNavigate(); 

  return (
    <div className="background_container">
     <div className="home-container">
        <div className="header_container">
          <Header />
        </div>
        <div className="body_container">
          <div className="navbar_container">
            <Navbar />
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
