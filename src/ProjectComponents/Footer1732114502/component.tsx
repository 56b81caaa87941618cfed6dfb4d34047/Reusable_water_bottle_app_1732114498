import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* FOOTER COPY */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">AquaFlow</h3>
            <p className="text-blue-200">© 2023 AquaFlow. Drink smart, live sustainably.</p>
            <div className="flex justify-start mt-4">
              <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Reusable_water_bottle_app_1732114498/main/src/assets/images/d3a6f7beea5f47a483512713b9e8cc81.jpeg" alt="AquaFlow" className="max-w-full h-auto w-32 h-32" />
            </div>

          {/* QUICK LINKS */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition duration-300">Products</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition duration-300">
                <i className='bx bxl-facebook text-2xl'></i>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition duration-300">
                <i className='bx bxl-twitter text-2xl'></i>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition duration-300">
                <i className='bx bxl-instagram text-2xl'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer as component };