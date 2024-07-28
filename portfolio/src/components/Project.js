import React from 'react';

const PortfolioSection = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Project 1 */}
        <div className="border p-4 rounded shadow-lg">
          <img src="your-image-url-1.png" alt="Project 1" className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-semibold mb-2">Project Title 1</h2>
          <p className="mb-2">Brief description of Project 1.</p>
          <p className="mb-4">Additional details about Project 1.</p>
          <div className="flex justify-self-around gap-3">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">View</button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded">Source</button>
          </div>
        </div>
        {/* Project 2 */}
        <div className="border p-4 rounded shadow-lg">
          <img src="your-image-url-2.png" alt="Project 2" className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-semibold mb-2">Project Title 2</h2>
          <p className="mb-2">Brief description of Project 2.</p>
          <p className="mb-4">Additional details about Project 2.</p>
          <div className="flex justify-self-around gap-3">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">View</button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded">Source</button>
          </div>
        </div>
        {/* Project 3 */}
        <div className="border p-4 rounded shadow-lg">
          <img src="your-image-url-3.png" alt="Project 3" className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-semibold mb-2">Project Title 3</h2>
          <p className="mb-2">Brief description of Project 3.</p>
          <p className="mb-4">Additional details about Project 3.</p>
          <div className="flex justify-self-around gap-3">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">View</button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded">Source</button>
          </div>
        </div>
        {/* Project 4 */}
        <div className="border p-4 rounded shadow-lg">
          <img src="your-image-url-4.png" alt="Project 4" className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-semibold mb-2">Project Title 4</h2>
          <p className="mb-2">Brief description of Project 4.</p>
          <p className="mb-4">Additional details about Project 4.</p>
          <div className="flex justify-self-around gap-3">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">View</button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded">Source</button>
          </div>
        </div>

         {/* Project 4 */}
         <div className="border p-4 rounded shadow-lg">
          <img src="your-image-url-4.png" alt="Project 4" className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-semibold mb-2">Project Title 4</h2>
          <p className="mb-2">Brief description of Project 4.</p>
          <p className="mb-4">Additional details about Project 4.</p>
          <div className="flex justify-self-around gap-3">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">View</button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded">Source</button>
          </div>
        </div>

         {/* Project 4 */}
         <div className="border p-4 rounded shadow-lg">
          <img src="your-image-url-4.png" alt="Project 4" className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-semibold mb-2">Project Title 4</h2>
          <p className="mb-2">Brief description of Project 4.</p>
          <p className="mb-4">Additional details about Project 4.</p>
          <div className="flex justify-self-around gap-3">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">View</button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded">Source</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
