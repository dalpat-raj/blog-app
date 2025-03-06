"use client"
import { nav_data } from '@/data/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Menu = ({active}: {active: boolean}) => {
  const pathname = usePathname();
  return (
    <ul className={`flex justify-start items-center gap-8 text-[17px] font-medium max-[990px]:absolute max-[990px]:bg-white dark:bg-[--dark]  
  left-0 max-[990px]:w-full max-[990px]:flex-col py-6 transition-all duration-700 ease-in-out z-20 max-[990px]:shadow-custom-shadow rounded-lg ${active ? " bottom-0 max-[990px]:bottom-[-300%] max-sm:bottom-[-370%]" : "max-[990px]:bottom-[100%]"} `}>
        {
            nav_data?.map((item, i)=> (
                <li key={i} className={pathname === item.href ? "text-[--secondary]" : "text-[--primary] dark:text-[--dark-light] hover:text-[--secondary] dark:hover:text-[--secondary] transition-all duration-300"}>
                    <Link href={item.href}>{item.title}</Link>
                </li>
            ))
        }
    </ul>
  )
}

export default Menu