// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Header'; 
import Footer from './components/Footer';
import './App.css'; // Import CSS for App styling

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
