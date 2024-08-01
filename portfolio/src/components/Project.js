import React from 'react';
import prj1 from '../components/images/project/prj1.png';
import prj2 from '../components/images/project/prj2.png';
import prj3 from '../components/images/project/prj3.png';
import prj4 from '../components/images/project/prj4.png';
import prj5 from '../components/images/project/prj5.png';
import prj6 from '../components/images/project/prj6.png';

const projects = [
  {
    title: 'MY PORTFOLIO',
    description: 'I crafted my own personal portfolio using ReactJS and Tailwind CSS, showcasing a unique blend of design and functionality.',
    description1: 'Tech Stack - Reactjs and Tailwind Css.',
    imgUrl: prj1,
    link: 'https://your-todo-app-link.com',
  },
  {
    title: 'TODO APP',
    description: 'Developed a full-stack To-Do app using ReactJS, Tailwind CSS, PHP, and MySQL.',
    description1: 'Tech Stack - Reactjs, Tailwind Css, PHP, and Mysql.',
    imgUrl: prj2, 
    link: 'https://ajaykumarshahutodoapp.netlify.app/',
  },
  {
    title: 'BLOG PAGE',
    description: 'Designed a simple and responsive blog page with a clean and user-friendly layout.',
    description1: 'Tech Stack - HTML and CSS.',
    imgUrl: prj3,
    link: 'https://ajay158.github.io/My_Blog/',
  },
  {
    title: 'MY SECOND TEACHER (MST)',
    description: "Created a website clone based on my second teacher's site, replicating its design and features.",
    description1: 'Tech Stack - HTML and CSS.',
    imgUrl: prj4,
    link: 'https://ajay158.github.io/My-Second-Teacher-MST---Clone-Website/',
  },
  {
    title: 'TIC TAC TOE GAME',
    description: 'Developed a Tic-Tac-Toe game.',
    description1: 'Tech Stack - HTML, CSS, and JS.',
    imgUrl: prj5,
    link: 'https://ajay158.github.io/Tic-Tac-Toe-Game/',
  },
  {
    title: 'A HOLIDAY TRIP WEBSITE',
    description: 'Built a holiday trip website using only HTML and CSS, optimized for desktop viewing.',
    description1: 'Tech Stack - HTML and CSS.',
    imgUrl: prj6,
    link: 'https://ajay158.github.io/A-Holiday-Trip',
  }
];

const Project = () => {
  return (
    <div id="project" className="bg-gray-100 text-white py-20">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <img
                src={project.imgUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
                <p className="mb-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                  {project.description1}
                </p>
                <a 
                  href={project.link} 
                  className="hover:text-blue-500"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project &rarr;
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
