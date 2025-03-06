import React from 'react'
import { FaPaperPlane } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className='my-12 py-16 max-sm:py-8 bg-[--bg-light] dark:bg-[--black] rounded-lg'>
        <div className='flex justify-start items-center gap-8 px-12 max-sm:px-4 max-lg:flex-col'>
            <div className='w-[40%] max-lg:w-full'>
                <h4 className='text-[24px] text-[--primary] dark:text-[--heading-color] font-semibold'>Subscribe Newsletter</h4>
                <span color='text-[--dark-gray]'>Get our latest news straight into your inbox</span>
            </div>
            <div className='relative w-[60%] max-lg:w-full'>
                <input type="text" placeholder='Enter Your Email...' className='w-full py-5 px-4 rounded-lg outline-none'/>
                <button className='h-full absolute right-0 top-0 bg-[--secondary] px-10 max-sm:px-6 rounded-lg text-[--white] hover:bg-[--secondary-dark] transition-all duration-300'><FaPaperPlane/></button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter