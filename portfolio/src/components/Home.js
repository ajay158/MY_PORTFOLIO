import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl">Showcasing My Skills and Projects</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl mb-6">
            I am a passionate Software Engineer with experience in developing web applications. I love to learn and explore new technologies.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">JavaScript</h3>
              <p>Proficient in ES6+, React, and Node.js.</p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">CSS</h3>
              <p>Experienced with Tailwind CSS, Bootstrap, and responsive design.</p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Backend</h3>
              <p>Skilled in PHP, Express, and RESTful APIs.</p>
            </div>
            {/* Add more skills as needed */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Project 1</h3>
              <p>Details about project 1.</p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Project 2</h3>
              <p>Details about project 2.</p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Project 3</h3>
              <p>Details about project 3.</p>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-xl mb-6">
            Feel free to reach out for any inquiries or collaborations.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="bg-gray-800 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-700"
          >
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
