import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-gradient-to-r from-purple-900 to-indigo-800 py-24 text-white w-full h-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Quench Your Thirst, Sustainably</h1>
          <p className="text-xl mb-8 text-gray-300">Discover our innovative water bottle solutions for a greener, more hydrated world</p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <i className='bx bx-water mr-2'></i>
            Explore Now
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/path-to-your-image.png" alt="Sustainable Water Bottle" className="max-w-md rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export { Hero as component }