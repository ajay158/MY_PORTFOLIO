import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Project/>
    </div>
  );
}

export default App;
