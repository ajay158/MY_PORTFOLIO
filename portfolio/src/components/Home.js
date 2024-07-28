import React from 'react';
import hero from '../components/images/hero.png';

const Home = () => {
  return (
    <div className="">
      <header className="bg-gray-800 text-white py-10">
      <div>
        <img src={hero} alt="hero.png"/>
    </div>
     <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Ajay</h1>
        <p className="text-xl">Full Stack Developer</p>
        <p>I design and code simple, beautiful things. I love bringing ideas to life with my work.</p>
    </div>

    <div className="btn display:inline-block ">
        <a href="" className='bg-blue-500 m-5 p-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-blue-500'>Say Hello</a>
        <a href="" className='bg-blue-500 m-5 p-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-blue-500'>Hire Me</a>
    </div>
        
      </header>
    </div>
  );
};

export default Home;
