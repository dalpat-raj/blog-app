import React from 'react'
import Link from 'next/link';


const NotFound = () => {
  return (
    <div className='w-full h-[80vh] flex justify-center items-center'>
      <div className='text-center'>
        <h1 className={`text-[38px] font-bold`}>404 - Page Not Found 🤷‍♂️</h1>
        <p className={`text-[18px]`}>The page you are looking for does not exist.</p>
        <div className='mt-6'>
        <Link href={"/"} className='bg-[--secondary] hover:bg-[--secondary-dark] w-auto text-white px-4 py-2 rounded-md text-[14px] transition-all duration-300'>
         Go To Home
        </Link>
        </div>
      
      </div>
    </div>
  )
}

export default NotFound;

