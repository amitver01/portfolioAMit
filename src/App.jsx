import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='w-full h-screen text-white'>
    <Router>
      <NavBar/>
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
    </Router>
    </div>
  );
};

export default App;
