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
    description: 'A simple Todo App built using ReactJS, Tailwind CSS, PHP, and MySQL.',
    description1: 'Tech Stack - HTML and CSS.',
    imgUrl: prj1,
    link: 'https://your-todo-app-link.com',
  },
  {
    title: 'TODO APP',
    description: 'A simple Todo App built using ReactJS, Tailwind CSS, PHP, and MySQL.',
    description1: 'Tech Stack - HTML and CSS.',
    imgUrl: prj2, 
    link: 'https://your-todo-app-link.com',
  },
  {
    title: 'BLOG PAGE',
    description: 'A simple Todo App built using ReactJS, Tailwind CSS, PHP, and MySQL.',
    description1: 'Tech Stack - HTML and CSS.',
    imgUrl: prj3,
    link: 'https://ajay158.github.io/My_Blog/',
  },
  {
    title: 'MY SECOND TEACHER (MST)',
    description: 'A simple Todo App built using ReactJS, Tailwind CSS, PHP, and MySQL.',
    description1: 'Tech Stack - HTML and CSS.',
    imgUrl: prj4,
    link: 'https://ajay158.github.io/My-Second-Teacher-MST---Clone-Website/',
  },
  {
    title: 'TIC TAC TOE GAME',
    description: 'A simple Todo App built using ReactJS, Tailwind CSS, PHP, and MySQL.',
    description1: 'Tech Stack - HTML and CSS.',
    imgUrl: prj5,
    link: 'https://ajay158.github.io/Tic-Tac-Toe-Game/',
  },
  {
    title: 'HOTEL WEBSITE',
    description: 'A simple Todo App built using ReactJS, Tailwind CSS, PHP, and MySQL.',
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
            <div key={index} className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <img
                src={project.imgUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
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
                  className="cursor-pointer text-blue-500 hover:underline"
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
