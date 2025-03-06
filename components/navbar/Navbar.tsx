"use client"
import React, { useState } from 'react'
import Logo from '@/components/navbar/Logo'
import Menu from '@/components/navbar/Menu'
import ThemeToggle from '@/app/theme-toggle'
import { HiMenu } from "react-icons/hi";
import Link from 'next/link';

const Navbar = () => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <nav className='px-24 max-sm:px-4 max-md:px-16 bg-[--white] dark:bg-[--dark] z-10 sticky top-0 left-0'>
        <div className='py-8 max-sm:py-6 flex justify-between items-center relative' >
            <div className='flex justify-start items-center gap-12'>
                <Logo color='--primary'/>
                <Menu active={active}/>
            </div>
            <div className='flex justify-start items-center gap-6 max-sm:gap-4'>
                <Link href={"/create-blog"} className='text-[14px] font-semibold bg-[--secondary] text-[--white] px-6 max-sm:px-4 py-1 transition duration-200 hover:bg-[--secondary-dark] flex items-center justify-center rounded-md'>Create Blog</Link>
                
                <ThemeToggle/>

                <button onClick={()=>setActive(!active)} className='text-2xl bg-[--secondary] hover:bg-[--secondary-dark] text-[--white] p-[3px] rounded-md hidden max-[990px]:block'>
                    <HiMenu/>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar