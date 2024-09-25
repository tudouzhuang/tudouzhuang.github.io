import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Content from './components/Content';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  return (
    <div className="app-container">
      <div>
        <Routes>
          <Route path="/" element={<div><Content /> <Header /> <Navbar /></div> } /> {/* 默认路径显示 Content */}
          <Route path="/Home" element={<Home />} /> {/* /Home 路径 */}
          <Route path="*" element={<NotFound />} /> {/* /NotFound 路径 */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
