import React from 'react';
import Arrow from '../images/arrow-right.svg';
import Icon from '../images/Icon_Demo_Button.svg';
import Screen from '../images/3_2 screen mockup.svg';


function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-20 ">
      
      <a href="/" className="text-[#6941C6] border-[1px] border-[#D6BBFB] bg-purple-50 rounded-full px-1 py-3 flex items-center space-x-2 mb-9 h-[46px] ">
         
         <button className='bg-white rounded-full px-2 py-1 my-1 border-[1px] border-[#D6BBFB]'>
            <span className="font-semibold">New feature</span>
         </button>

         <span className="font-semibold">Check out the team dashboard</span>
         <img src={Arrow} alt="Arrow" className="ml-2 h-4 w-4" />
      </a>

      <h1 className="text-4xl font-bold text-gray-800 mb-3">Beautiful analytics to grow smarter</h1>
      <p className="text-md text-gray-600">
        Powerful, self-serve product and growth analytics to help you convert,<br /> engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      <div className="flex flex-col space-y-4 mt-5 md:flex-row md:space-x-4 md:space-y-0">
         
        <button className="flex items-center text-gray-700 border border-gray-400 px-6 py-3 font-semibold rounded-lg">
         <img src={Icon} alt="Icon" className="mr-2" />
         Demo
         </button>
        <button className="bg-customPurple text-white px-6  py-3 rounded">Sign up</button>
      </div>
      
      <img src={Screen} alt='Screen' className='mt-10'/>
    </div>

    
  );
}

export default HeroSection;