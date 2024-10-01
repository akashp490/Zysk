import React, { useState } from 'react';
import Logomark from '../images/Logomark.svg';
import Avatar from '../images/Avatar.svg';

const Navbar = () => {
  // State to manage visibility of dropdowns
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
   <div className="container mx-auto flex justify-between items-center py-4 px-6 border-b-[1px] border-gray-200">

      {/* Left Section */}
      <div className="flex items-center space-x-3">
         
         {/* Logo Section */}
         <div className="flex items-center space-x-2 mr-5">
            <img
          src={Logomark} // Replace with your logo
          alt="Logo"
          className="h-8 w-8 rounded-full"
            />
            <span className="font-bold text-lg">Untitled UI</span>

         </div>
        

        {/* Navigation Links */}
        <nav className="md:flex space-x-5 font-semibold">

          <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>

          {/* Products Accordion */}
          <div className="relative">
            <button
              className="text-gray-600 hover:text-gray-900 flex items-center"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              Products
              <svg
                className={`w-4 h-4 inline ml-1 transform transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>

            </button>
            {isProductsOpen && (
              <div className="absolute bg-white shadow-md mt-2 rounded-lg w-max">
                <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product 1</a>
                <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product 2</a>
              </div>
            )}
          </div>

          {/* Resources Accordion */}
          <div className="relative">
            <button
              className="text-gray-600 hover:text-gray-900 flex items-center"
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            >
              Resources
              <svg
                className={`w-4 h-4 inline ml-1 transform transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isResourcesOpen && (
              <div className="absolute bg-white shadow-md mt-2 rounded-lg w-max">
                <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resource 1</a>
                <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resource 2</a>
              </div>
            )}
          </div>

          <a href="/" className="text-gray-600 hover:text-gray-900">Pricing</a>

        </nav>
        
      </div>

      {/* Right Avatar Section */}
      <div className="flex items-center space-x-4">
        <img
          src={Avatar} // Replace with actual profile image
          alt="Profile"
          className=" rounded-full"
        />
      </div>

   </div>
  );
};

export default Navbar;
