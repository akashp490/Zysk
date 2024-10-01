import React from 'react'
import up from '../images/up.svg'
import b1 from '../images/b1.svg'
import b2 from '../images/b2.svg'
import b3 from '../images/b3.svg'
import A1 from '../images/A1.svg'
import A2 from '../images/A2.svg'
import A3 from '../images/A3.svg'



const BlogSection = () => {
  return (
    <div className="my-[90px] mx-[110px]">

      <div className="mb-5 p-4">
         <div className="flex justify-between">
            <a href="/" className="text-customPurple font-semibold">Our blog</a>
            <button className="bg-customPurple text-white px-3 py-1 rounded">View all posts</button>           
         </div>
         <h2 class="text-left text-2xl font-semibold  text-[#101828] mb-4">Latest blog posts</h2>
         <p class="text-left text-gray-500">Tool and strategies modern teams need to help their companies grow.</p>    
      </div>

     

         <div className="p-3 rounded-lg">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    
    <div className="p-4 rounded-lg">
      <img src={b1} alt='' className="w-full h-auto rounded" />
      <h3 className="text-customPurple font-semibold text-sm my-2">Design</h3>
      <a href='/' className='font-bold text-[#101828] flex justify-between'>
        <h2> UX review presentations</h2>
        <img src={up} alt='' />
      </a>
      <p className="text-gray-500 md:text-left">
        How do you create compelling presentations that wow your colleagues and impress your managers?
      </p>

      <div className="flex items-center mt-4">
        <img src={A1} alt="Olivia Rhye" className="w-12 h-12 rounded-full mr-2" />
        <div>
          <p className="text-[#101828] font-semibold">Olivia Rhye</p>
          <p className="text-gray-500">20 Jan 2024</p>
        </div>
      </div>
    </div>

    <div className="p-4 rounded-lg">
      <img src={b2} alt='' className="w-full h-auto rounded" />
      <h3 className="text-customPurple font-semibold text-sm my-2">Design</h3>
      <a href='/' className='font-bold text-[#101828] flex justify-between'>
        <h2> UX review presentations</h2>
        <img src={up} alt='' />
      </a>
      <p className="text-gray-500 md:text-left">
        How do you create compelling presentations that wow your colleagues and impress your managers?
      </p>

      <div className="flex items-center mt-4">
        <img src={A2} alt="Olivia Rhye" className="w-12 h-12 rounded-full mr-2" />
        <div>
          <p className="text-[#101828] font-semibold">Olivia Rhye</p>
          <p className="text-gray-500">20 Jan 2024</p>
        </div>
      </div>
    </div>

    <div className="p-4 rounded-lg">
      <img src={b3} alt='' className="w-full h-auto rounded" />
      <h3 className="text-customPurple font-semibold text-sm my-2">Design</h3>
      <a href='/' className='font-bold text-[#101828] flex justify-between'>
        <h2> UX review presentations</h2>
        <img src={up} alt='' />
      </a>
      <p className="text-gray-500 md:text-left">
        How do you create compelling presentations that wow your colleagues and impress your managers?
      </p>

      <div className="flex items-center mt-4">
        <img src={A3} alt="Olivia Rhye" className="w-12 h-12 rounded-full mr-2" />
        <div>
          <p className="text-[#101828] font-semibold">Olivia Rhye</p>
          <p className="text-gray-500">20 Jan 2024</p>
        </div>
      </div>
    </div>

  </div>
</div>


     

      

    </div>
  )
}

export default BlogSection