import React from 'react'
import Phone from '../images/iPhone.svg'
import DScreen from '../images/Screen.svg'
import FC1 from '../images/Featured icon1.svg'
import FC2 from '../images/Featured icon2.svg'
import FC3 from '../images/Featured icon3.svg'
import right from '../images/right.svg'

const FeatureSection2 = () => {
  return (
   <div className='mt-[90px] mb-[90px]'>
      
      <div className="text-center mb-[60px]">
         <p className='text-[#6941C6] font-semibold mt-[80px] mb-[12px]'>Features</p>
        <h2 className="text-3xl font-bold text-gray-800">Cutting-edge features for advanced analytics</h2>
        <p className="text-lg text-gray-600 mt-4">Powerful, self-serve product and growth analytics to help you convert, 
         <br />
         engage, and retain more users. Trusted by over 4,000 startups.</p>
      </div>
      
      <div className=" flex justify-center items-center ">
         {/* Desktop Screen */}
         <div className=" rounded-lg hidden md:block md:relative ">
         <img
            src={DScreen}
            alt="Desktop Screen"
            className="  "
         />
         </div>

         {/* iPhone Screen (Overlapping) */}
         <div className="absolute rounded-2xl  md:transform -translate-x-[340px]  translate-y-[25px]">
         <img
            src={Phone}
            alt="iPhone Screen"
            className=""
         />
         </div>
      </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-[80px] mx-[50px] pb-[80px] border-b-[2px] border-gray-200 rounded">
         
         <div class="bg-white rounded-lg p-4 text-center flex flex-col items-center justify-center">
            <img src={FC1} alt="Arrow"  />
            <h3 class="text-lg font-bold mb-3">Share team inboxes</h3>
            <p class="text-gray-500">Whether you have a team of 2 or 200, our shared team 
            inboxes keep everyone on the same page and in the loop.</p>

            <button class="flex items-center justify-center card-button mt-10 font-semibold text-customPurple">
               Learn more 
               <img src={right} alt='' className='ml-3 w-[11px] h-[11px] translate-y-[2px]' />
            </button>

         </div>

         <div class="bg-white rounded-lg p-4 text-center flex flex-col items-center justify-center">
            <img src={FC2} alt="Arrow"  />
            <h3 class="text-lg font-bold mb-3">Deliver instant answers</h3>
            <p class="text-gray-500">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            <button class="flex items-center justify-center card-button mt-10 font-semibold text-customPurple">
               Learn more 
               <img src={right} alt='' className='ml-3 w-[11px] h-[11px] translate-y-[2px]' />
            </button>
         
         </div>

         <div class="bg-white rounded-lg p-4 text-center flex flex-col items-center justify-center">
            <img src={FC3} alt="Arrow"  />
            <h3 class="text-lg font-bold mb-3">Manage your team with reports</h3>
            <p class="text-gray-500">Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
            <button class="flex items-center justify-center card-button mt-10 font-semibold text-customPurple">
               Learn more 
               <img src={right} alt='' className='ml-3 w-[11px] h-[11px] translate-y-[2px]' />
            </button>
         </div>
      </div>   

   </div>
  )
}

export default FeatureSection2