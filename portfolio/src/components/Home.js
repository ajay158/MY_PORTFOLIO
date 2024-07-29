import React from 'react';
import hero from '../components/images/hero.png';

const Home = () => {
  return (
    <div className="">
      <header className="flex bg-gray-800 text-white py-20 ">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Ajay</h1>
          <p className="text-xl">Full Stack Developer</p>
          <p>I design and code simple, beautiful things. I love bringing ideas to life with my work.</p>
         </div>
        <div className=''>
          <img src={hero} alt="hero.png"/>
        </div>
      </header>
     {/* <div className="flex justify-self-around gap-3">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Say Hello</button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded">Hire Me</button>
      </div>    */}
   </div>
  );
};

export default Home;
