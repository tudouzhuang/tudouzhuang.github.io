import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App-container">
      <Routes>
        <Route path="/" element={
          <>
            <h1>Welcome to My Simple React Page</h1>
            <p>This is a simple webpage built with React.</p>
            <nav>
              <Link to="/home">Home</Link>
            </nav>
          </>
        } />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
