import React from 'react';
import prj1 from '../components/images/project/prj1.png';
import prj2 from '../components/images/project/prj2.png';
import prj3 from '../components/images/project/prj3.png';


const AboutSection = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Project 1 */}
        <div className="relative h-72 border rounded shadow-lg overflow-hidden">
          <img 
            src={prj1} 
            alt="Project 1" 
            className="absolute inset-0 w-full h-full object-cover filter blur-sm" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white z-10">
            <h2 className="text-lg font-semibold mb-1">MY PORTFOLIO</h2>
            <p className="text-sm mb-2">Brief description of Project 1.</p>
            <p className="text-sm mb-2"><span className='font-bold'>TECH STACK</span> - ReactJs and Tailwind CSS</p>
            <div className="flex gap-2">
              <button className="font-medium bg-white border-blue-700 text-black py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300">Github</button>
              <button className="font-medium bg-blue-500 text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300">Demo</button>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative h-72 border rounded shadow-lg overflow-hidden">
          <img 
            src={prj2} 
            alt="Project 2" 
            className="absolute inset-0 w-full h-full object-cover filter blur-sm" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white z-10">
            <h2 className="text-lg font-semibold mb-1">TODO APP</h2>
            <p className="text-sm mb-2">Brief description of Project 2.</p>
            <p className="text-sm mb-2"><span className='font-bold'>TECH STACK</span> - ReactJs, Tailwind CSS, PHP, and Mysql.</p>
            <div className="flex gap-2">
              <button className="font-medium bg-white border-blue-700 text-black py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300">Github</button>
              <button className="font-medium bg-blue-500 text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300">Demo</button>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="relative h-72 border rounded shadow-lg overflow-hidden">
          <img 
            src={prj3} 
            alt="Project 3" 
            className="absolute inset-0 w-full h-full object-cover filter blur-sm" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white z-10">
            <h2 className="text-lg font-semibold mb-1">BLOG PAGE</h2>
            <p className="text-sm mb-2">Brief description of Project 3.</p>
            <p className="text-sm mb-2"><span className='font-bold'>TECH STACK</span> - HTML and CSS</p>
            <div className="flex gap-2">
              <button className="font-medium bg-white border-blue-700 text-black py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300">Github</button>
              <button className="font-medium bg-blue-500 text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300">Demo</button>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="relative h-72 border rounded shadow-lg overflow-hidden">
          <img 
            src="your-image-url-4.png" 
            alt="Project 4" 
            className="absolute inset-0 w-full h-full object-cover filter blur-sm" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white z-10">
            <h2 className="text-lg font-semibold mb-1">Project Title 4</h2>
            <p className="text-sm mb-2">Brief description of Project 4.</p>
            <p className="text-sm mb-2"><span className='font-bold'>TECH STACK</span> - HTML and CSS</p>
            <div className="flex gap-2">
              <button className="font-medium bg-white border-blue-700 text-black py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300">Github</button>
              <button className="font-medium bg-blue-500 text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300">Demo</button>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="relative h-72 border rounded shadow-lg overflow-hidden">
          <img 
            src="your-image-url-5.png" 
            alt="Project 5" 
            className="absolute inset-0 w-full h-full object-cover filter blur-sm" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white z-10">
            <h2 className="text-lg font-semibold mb-1">Project Title 5</h2>
            <p className="text-sm mb-2">Brief description of Project 5.</p>
            <p className="text-sm mb-2"><span className='font-bold'>TECH STACK</span> - HTML and CSS</p>
            <div className="flex gap-2">
              <button className="font-medium bg-white border-blue-700 text-black py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300">Github</button>
              <button className="font-medium bg-blue-500 text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300">Demo</button>
            </div>
          </div>
        </div>

         {/* Project 5 */}
         <div className="relative h-72 border rounded shadow-lg overflow-hidden">
          <img 
            src="your-image-url-5.png" 
            alt="Project 5" 
            className="absolute inset-0 w-full h-full object-cover filter blur-sm" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white z-10">
            <h2 className="text-lg font-semibold mb-1">Project Title 5</h2>
            <p className="text-sm mb-2">Brief description of Project 5.</p>
            <p className="text-sm mb-2"><span className='font-bold'>TECH STACK</span> - HTML and CSS</p>
            <div className="flex gap-2">
              <button className="font-medium bg-white border-blue-700 text-black py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300">Github</button>
              <button className="font-medium bg-blue-500 text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300">Demo</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
