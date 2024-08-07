// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Fertilizers from './components/sub-components/Fertilizers';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fertilizers" element={<Fertilizers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
