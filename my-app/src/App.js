import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Article from './pages/Article';
import About from './pages/About';

function App() {
  return (
    <div className="app-container">
      <div>
        <Routes>
          <Route path="/" element={<Home /> } /> {/* 默认路径显示 Content */}
          <Route path="*" element={<NotFound />} /> {/* /NotFound 路径 */}
          <Route path="/Article" element={<Article />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
