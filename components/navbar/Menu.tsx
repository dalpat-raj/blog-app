"use client"
import { nav_data } from '@/data/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Menu = () => {
    const pathname = usePathname();
  return (
    <ul className='flex justify-start items-center gap-8 text-[17px] font-medium max-[990px]:hidden '>
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