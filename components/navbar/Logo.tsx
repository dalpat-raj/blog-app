import Link from 'next/link';
import React from 'react'
import { FaRegBell } from "react-icons/fa";

const Logo = ({color}: {color: string}) => {
  return (
    <Link href={"/"}>
    <div className='flex justify-start items-center gap-2'>
        <div className='text-[--secondary] text-3xl max-md:text-2xl'>
            <FaRegBell />
        </div>
        <h2 className={`text-[${color}] dark:text-[--heading-color] text-3xl max-md:text-2xl font-extrabold`}>Blog Store</h2>
    </div>
    </Link>
  )
}

export default Logo