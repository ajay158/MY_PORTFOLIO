import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
