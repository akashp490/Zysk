import React from 'react'

const TrialSection = () => {
  return (
    <div className=' item-center text-center bg-gray-50 px-[112px] py-[96px] '>

       <h1 className="text-4xl font-bold text-customBlack mb-4">Start your free trial</h1>
      <p className="text-md text-gray-500">
        Join over 4,000+ startups already growing with Untitled.
      </p>

      <div className="mt-6 flex justify-center space-x-3">
         
        <button className="flex items-center text-customBlack border border-gray-400 px-6 py-3 font-semibold rounded-lg">
          Learn more
         </button>
        <button className="bg-customPurple font-semibold text-white px-6  py-3 rounded">Get Started</button>
      </div>
    </div>
  )
}

export default TrialSection