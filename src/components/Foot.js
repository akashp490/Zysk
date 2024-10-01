import React from 'react'
import LogoMark from '../images/Logomark.svg'

const Foot = () => {
  return (
  
    <div className="text-[#475467] font-semibold py-[80px]  px-[80px]">
      

      <div className="flex flex-col  md:flex-row justify-between pb-14 border-b-[2px] border-gray-200 rounded">

          <div className="mb-6 md:mb-0">  

            <h3 className=" text-[#667085] font-semibold">Product</h3>
            <ul className="mt-2 space-y-3">
              <li><a href="#" >Overview</a></li>
              <li><a href="#" >Features</a></li>
              <li><a href="#" >Solutions</a></li>
              <li><a href="#" >Tutorials</a></li>
              <li><a href="#" >Pricing</a></li>
              <li><a href="#" >Releases</a></li>
            </ul>

          </div>

          <div className="mb-6 md:mb-0">
            <h3 className=" text-[#667085] font-semibold">Company</h3>
            <ul className="mt-2 space-y-3">
              <li><a href="#" >About us</a></li>
              <li><a href="#" >Careers</a></li>
              <li><a href="#" >Press</a></li>
              <li><a href="#" >News</a></li>
              <li><a href="#" >Media kit</a></li>
              <li><a href="#" >Contact</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className=" text-[#667085] font-semibold">Resources</h3>
            <ul className="mt-2 space-y-3">
              <li><a href="#" >Blog</a></li>
              <li><a href="#" >Newsletter</a></li>
              <li><a href="#" >Events</a></li>
              <li><a href="#" >Help centre</a></li>
              <li><a href="#" >Tutorials</a></li>
              <li><a href="#" >Support</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className=" text-[#667085] font-semibold">Use cases</h3>
            <ul className="mt-2 space-y-3">
              <li><a href="#" >Startups</a></li>
              <li><a href="#" >Enterprise</a></li>
              <li><a href="#" >Government</a></li>
              <li><a href="#" >SaaS centre</a></li>
              <li><a href="#" >Marketplaces</a></li>
              <li><a href="#" >Ecommerce</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className=" text-[#667085] font-semibold">Social</h3>
            <ul className="mt-2 space-y-3">
              <li><a href="#" >Twitter</a></li>
              <li><a href="#" >LinkedIn</a></li>
              <li><a href="#" >Facebook</a></li>
              <li><a href="#" >GitHub</a></li>
              <li><a href="#" >AngelList</a></li>
              <li><a href="#" >Dribbble</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className=" text-[#667085] font-semibold">Legal</h3>
            <ul className="mt-2 space-y-3">
              <li><a href="#" >Terms</a></li>
              <li><a href="#" >Privacy</a></li>
              <li><a href="#" >Cookies</a></li>
              <li><a href="#" >Licenses</a></li>
              <li><a href="#" >Settings</a></li>
              <li><a href="#" >Contact</a></li>
            </ul>
          </div>

      </div>

   

      
      <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center  px-3 mt-12">
         {/* Left Section */}
         <div className="flex items-center">
            {/* Logo */}
            <img src={LogoMark} alt='' />
            {/* Title */}
            <h1 className="ml-2 text-lg font-bold text-customBlack">Untitled UI</h1>
         </div>

         {/* Right Section */}
               
         <p className="mt-4  text-gray-500 text-sm md:mt-0">© 2077 Untitled UI. All rights reserved.</p>
                       

      </div>

        

      
    </div>
  )
}

export default Foot