import React from 'react'
import CompanyLogo from '../images/Fictional company logo.svg'
import Candice from '../images/Candice.svg'

const TestimonalSection = () => {
  return (
   

      <div className="text-center mt-[90px] mb-[90px] px-[30px] py-[65px] bg-gray-50">
         

         <div className="flex flex-col items-center mb-[30px] ">
            <img src={CompanyLogo} alt="Arrow" className=" mb-[32px]" />
            <p className="text-[#101828] text-4xl font-medium mb-[32px]">
               We've been using Untitled to kick start every new <br/>project and can't imagine working without it.
            </p>
         </div>   
                
         <div className="flex flex-col items-center mt-2">  
            <img src={Candice} alt="Candice Wu's avatar" className=" rounded-full" />
            <div class="ml-2">
               <span className="text-gray-900 font-bold">Candice Wu</span>
               <br  />
               <span className="text-gray-500">Product Manager, Sisyphus</span>
            </div>

         </div>
        

      </div>

    
  )
}

export default TestimonalSection