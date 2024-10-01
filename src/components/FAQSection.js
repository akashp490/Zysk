import { useState } from "react";
import React from 'react';
import Plus from '../images/plus.svg';
import Minus from '../images/minus.svg';
import AVgroup from '../images/Avatar group.svg' 


const FAQSection = () => {
   const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
   <div className="text-[#475467] mt-[90px] mb-[90px]">
      
      <div className="mb-[54px] text-center">
         <h2 class="text-3xl text-[#101828] font-semibold mb-4">Frequently asked questions</h2>
         <p class="text-gray-500 mb-8">Everything you need to know about the product and billing.</p>
      </div>    


      <div className="accordion w-full max-w-3xl mx-auto ">
         
      {/* Accordion Item 1 */}
      <div className="accordion-item border-b border-gray-200">
        <button
          className="accordion-button w-full flex justify-between items-center p-4 text-lg font-medium text-left text-[#101828] focus:outline-none"
          onClick={() => toggleAccordion(0)}
        >
          <span>Is there a free trial available?</span>
          <span className="text-2xl">{activeIndex === 0 ? (<img src={Minus} alt="minus0" className="w-[20px] h-[20px]"  />) 
          :
           (<img src={Plus} alt="plus0" className="w-[20px] h-[20px]"  />)}</span>
        </button>

        {activeIndex === 0 && (
          <div className="p-4 text-gray-600">
            <p>
            Yes, you can try us for free for 30 days.
            If you want, we'll provide you with a free,
            personalized<br /> 30-minute onboarding call to get you up and running as soon as possible.
            </p>
          </div>
        )}
      </div>

      {/* Accordion Item 2 */}
      <div className="accordion-item border-b border-gray-200">
        <button
          className="accordion-button w-full flex justify-between items-center p-4 text-lg font-medium text-left text-[#101828] focus:outline-none"
          onClick={() => toggleAccordion(1)}
        >
          <span>Can I change my plan later?</span>
          <span className="text-2xl">{activeIndex === 1 ? (<img src={Minus} alt="minus1" className="w-[20px] h-[20px]"  />) 
          :
           (<img src={Plus} alt="plus1" className="w-[20px] h-[20px]"  />)}</span>
        </button>
        {activeIndex === 1 && (
          <div className="p-4 text-gray-600">
            <p>
            Yes, you can try us for free for 30 days.
            If you want, we'll provide you with a free,
            personalized<br /> 30-minute onboarding call to get you up and running as soon as possible.
            </p>
          </div>
        )}
      </div>

      {/* Accordion Item 3 */}
      <div className="accordion-item border-b border-gray-200">
        <button
          className="accordion-button w-full flex justify-between items-center p-4 text-lg font-medium text-left text-[#101828] focus:outline-none"
          onClick={() => toggleAccordion(2)}
        >
          <span>What is your cancellation policy?</span>
          <span className="text-2xl">{activeIndex === 2 ? (<img src={Minus} alt="minus2" className="w-[20px] h-[20px]"  />) 
          :
           (<img src={Plus} alt="plus2" className="w-[20px] h-[20px]"  />)}</span>
        </button>
        {activeIndex === 2 && (
          <div className="p-4 text-gray-600">
            <p>
            Yes, you can try us for free for 30 days.
            If you want, we'll provide you with a free,
            personalized<br /> 30-minute onboarding call to get you up and running as soon as possible.
            </p>
          </div>
        )}
      </div>

      {/* Accordion Item 4 */}
      <div className="accordion-item border-b border-gray-200">
        <button
          className="accordion-button w-full flex justify-between items-center p-4 text-lg font-medium text-left text-[#101828] focus:outline-none"
          onClick={() => toggleAccordion(3)}
        >
          <span>Can other info be added to an invoice?</span>
          <span className="text-2xl">{activeIndex === 3 ? (<img src={Minus} alt="minus3" className="w-[20px] h-[20px]"  />) 
          :
           (<img src={Plus} alt="plus3" className="w-[20px] h-[20px]"  />)}</span>
        </button>
        {activeIndex === 3 && (
          <div className="p-4 text-gray-600">
            <p>
            Yes, you can try us for free for 30 days.
            If you want, we'll provide you with a free,
            personalized<br /> 30-minute onboarding call to get you up and running as soon as possible.
            </p>
          </div>
        )}
      </div>

      {/* Accordion Item 5 */}
      <div className="accordion-item border-b border-gray-200">
        <button
          className="accordion-button w-full flex justify-between items-center p-4 text-lg font-medium text-left text-[#101828] focus:outline-none"
          onClick={() => toggleAccordion(4)}
        >
          <span>How does billing work?</span>
          <span className="text-2xl">{activeIndex === 4 ? (<img src={Minus} alt="minus4" className="w-[20px] h-[20px]"  />) 
          :
           (<img src={Plus} alt="plus4" className="w-[20px] h-[20px]"  />)}</span>
        </button>
        {activeIndex === 4 && (
          <div className="p-4 text-gray-600">
            <p>
            Yes, you can try us for free for 30 days.
            If you want, we'll provide you with a free,
            personalized<br /> 30-minute onboarding call to get you up and running as soon as possible.
            </p>
          </div>
        )}
      </div>

      {/* Accordion Item 6 */}
      <div className="accordion-item border-b border-gray-200">
        <button
          className="accordion-button w-full flex justify-between items-center p-4 text-lg font-medium text-left text-[#101828] focus:outline-none"
          onClick={() => toggleAccordion(5)}
        >
          <span>How do I change my account email?</span>
          <span className="text-2xl">{activeIndex === 5 ? (<img src={Minus} alt="minus5" className="w-[20px] h-[20px]"  />) 
          :
           (<img src={Plus} alt="plus5" className="w-[20px] h-[20px]"  />)}</span>
        </button>
        {activeIndex === 5 && (
          <div className="p-4 text-gray-600">
            <p>
            Yes, you can try us for free for 30 days.
            If you want, we'll provide you with a free,
            personalized<br /> 30-minute onboarding call to get you up and running as soon as possible.
            </p>
          </div>
        )}
      </div>
    </div>


    <div className="bg-gray-50 my-[60px] mx-[32px] px-[50px] py-[25px] flex flex-col items-center justify-center text-center rounded ">
      <img src={AVgroup} alt="avgroup"  className="" />
      <h2 class="text-2xl font-bold mb-4">Still have questions?</h2>
      <p class="text-gray-500 mb-4">Can't find the answer you're looking for? Please chat to our friendly team.</p>
      
      <button className="bg-customPurple text-white px-4 py-2 rounded">Get in touch</button>     
    </div>

   </div>
  )
}

export default FAQSection