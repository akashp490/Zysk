import React from 'react'
import FC1 from '../images/Featured icon1.svg'
import FC2 from '../images/Featured icon2.svg'
import FC3 from '../images/Featured icon3.svg'
import FC4 from '../images/Featured icon4.svg'
import FC5 from '../images/Featured icon5.svg'
import FC6 from '../images/Featured icon6.svg'

const FeatureSection = () => {
  return (
    <div className='mb-[96px]'>

      <div className="text-center">
         <p className='text-[#6941C6] font-semibold mt-[80px] mb-[12px]'>Features</p>
        <h2 className="text-3xl font-bold text-gray-800">Analytics that feels like it's from the future</h2>
        <p className="text-lg text-gray-600 mt-4">Powerful, self-serve product and growth analytics to help you convert, 
         <br />
         engage, and retain more users. Trusted by over 4,000 startups.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[64px] mb-[64px] px-[50px]">
         
         <div class="bg-white rounded-lg p-4 text-center flex flex-col items-center justify-center">
            <img src={FC1} alt="Arrow" />
            <h3 class="text-lg font-bold mb-3">Share team inboxes</h3>
            <p class="text-gray-500">Whether you have a team of 2 or 200, our shared team 
            inboxes keep everyone on the same page and in the loop.</p>
         </div>

         <div class="bg-white rounded-lg p-4 text-center flex flex-col items-center justify-center">
            <img src={FC2} alt="Arrow"  />
            <h3 class="text-lg font-bold mb-3">Deliver instant answers</h3>
            <p class="text-gray-500">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
         </div>

         <div class="bg-white rounded-lg p-4 text-center flex flex-col items-center justify-center">
            <img src={FC3} alt="Arrow"  />
            <h3 class="text-lg font-bold mb-3">Manage your team with reports</h3>
            <p class="text-gray-500">Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
         </div>

         <div class="bg-white rounded-lg p-4 text-center flex flex-col items-center justify-center">
            <img src={FC4} alt="Arrow"  />
            
            <h3 class="text-lg font-bold mb-3">Connect with customers</h3>
            <p class="text-gray-500">Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>   

         </div>

         <div class="bg-white rounded-lg p-4 text-center flex flex-col items-center justify-center">
            <img src={FC5} alt="Arrow"  />
            
            <h3 class="text-lg font-bold mb-3">Connect the tools you already use</h3>
            <p class="text-gray-500">Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>   

         </div>

         <div class="bg-white rounded-lg p-4 text-center flex flex-col items-center justify-center">
            <img src={FC6} alt="Arrow" />
            
            <h3 class="text-lg font-bold mb-3">Our people make the difference</h3>
            <p class="text-gray-500">We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>   

         </div>

      </div>

    </div>

  )
}

export default FeatureSection