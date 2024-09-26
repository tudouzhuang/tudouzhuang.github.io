import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="glass-card">
        <div className="avatar-container">
          <Link to="/">
             <img src={require('../img/avatar.png')} alt="Profile" className="avatar" />
          </Link>
        </div>
        <hr className="divider" />
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={require('../img/github-icon.png')} alt="GitHub" className="icon" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={require('../img/linkedin-icon.png')} alt="LinkedIn" className="icon" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={require('../img/twitter-icon.png')} alt="Twitter" className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
