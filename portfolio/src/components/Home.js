import React from 'react';
import hero from '../components/images/hero.png';

const Home = () => {
  return (
    <>
    <div className="">
      <header className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 lg:px-60 flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Ajay</h1>
            <p className="text-xl">Front-End Developer</p>
            <p className='mt-3'>I design and code simple, beautiful things. I love bringing ideas to life with my work.</p>
            <div className="flex justify-center lg:justify-start gap-3 mt-6">
              <button className=" font-medium bg-white border-blue-700 text-black py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300"><a href="#contact">Say Hello</a></button>
              <button className="font-medium bg-blue-500 text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300"><a href="https://drive.google.com/file/d/1xb1QMEHbx72ZtU6XS0nZs0Juc0amIrI3/view?usp=sharing" target="_blank">Resume</a></button>
            </div>
          </div>
          <div className="mb-6 lg:mb-0 lg:ml-6">
            <img src={hero} alt="hero.png" className="max-w-xs mx-auto lg:mx-0"/>
          </div>
        </div>
      </header>
    </div>
  </>
  
  
  );
};

export default Home;
