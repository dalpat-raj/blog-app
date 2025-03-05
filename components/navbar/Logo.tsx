import Link from 'next/link';
import React from 'react'
import { FaRegBell } from "react-icons/fa";

const Logo = () => {
  return (
    <Link href={"/"}>
    <div className='flex justify-start items-center gap-2'>
        <div className='text-[--secondary] text-2xl '>
            <FaRegBell />
        </div>
        <h2 className={`text-[--primary] dark:text-[--white] text-2xl font-extrabold`}>Blog Store</h2>
    </div>
    </Link>
  )
}

export default Logo