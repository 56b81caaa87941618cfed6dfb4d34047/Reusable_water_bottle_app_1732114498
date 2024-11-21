import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* FOOTER COPY */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold">AquaFlow</h3>
            <p className="text-blue-200 text-xl">© 2023 AquaFlow. Drink smart, live sustainably.</p>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-blue-200 hover:text-white transition duration-300 text-lg">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition duration-300 text-lg">Products</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition duration-300 text-lg">Contact</a></li>
            </ul>
          </div>

          {/* WATER DROP ICON */}
          <div className="flex justify-center items-center">
            <img 
              src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Reusable_water_bottle_app_1732114498/main/src/assets/images/d3a6f7beea5f47a483512713b9e8cc81.jpeg" 
              alt="AquaFlow Logo" 
              className="w-48 h-48 max-w-full h-auto"
            />
          </div>

          {/* SOCIALS */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">Connect With Us</h4>
            <div className="flex space-x-6">
              <a href="#" aria-label="Facebook" className="text-blue-200 hover:text-white transition duration-300">
                <i className="bx bxl-facebook text-4xl"></i>
              </a>
              <a href="#" aria-label="Twitter" className="text-blue-200 hover:text-white transition duration-300">
                <i className="bx bxl-twitter text-4xl"></i>
              </a>
              <a href="#" aria-label="Instagram" className="text-blue-200 hover:text-white transition duration-300">
                <i className="bx bxl-instagram text-4xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer as component };
