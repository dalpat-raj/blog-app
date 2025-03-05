import React from 'react'
import Logo from '../navbar/Logo'
import { FaFacebookF, FaTwitter, FaRss, FaLinkedinIn, FaGoogle } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-[--black] px-24 py-12 max-sm:px-4 max-md:px-16 flex justify-center items-center text-center'>
        <div className='w-full'>
            <div className='w-[70%] max-md:w-full m-auto flex flex-col justify-center items-center gap-4'>
                <Logo/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis beatae fugit dignissimos nobis. Aliquid molestiae fuga saepe sed dolores. dsfksdkflskdlfksldk</p>
            </div>
            <div className='w-full h-[1px] bg-[--dark-gray] my-10'></div>
            <div>
                <ul className='flex justify-center items-center gap-4 text-[--white]'>
                    <li className='bg-[--facebook] p-2 text-xl rounded-full cursor-pointer'><FaFacebookF/></li>
                    <li className='bg-[--twitter] p-2 text-xl rounded-full cursor-pointer'><FaTwitter/></li>
                    <li className='bg-[--rss] p-2 text-xl rounded-full cursor-pointer'><FaRss/></li>
                    <li className='bg-[--linkedin] p-2 text-xl rounded-full cursor-pointer'><FaLinkedinIn/></li>
                    <li className='bg-[--google] p-2 text-xl rounded-full cursor-pointer'><FaGoogle/></li>
                </ul>
                <p className='mt-4'><small>©</small> 2020 Blog Store. All Rights Reserved | Design by <big className='text-[--white]'>Dalpat Raj</big></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer