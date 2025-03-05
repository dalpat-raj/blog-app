"use client"
import React, { useEffect, useState } from 'react'
import Card from './Card'
import blogsData from "@/data/blogs.json";
import { BlogData } from '@/lib/definations';
import Link from 'next/link';

const Blogs = () => {
    const [blogs, setBlogs] = useState<BlogData[]>([]);
  
    useEffect(() => {
        const storedBlogs: BlogData[] = JSON.parse(localStorage.getItem("blogs") || "[]");
        setBlogs([...blogsData, ...storedBlogs]);
    }, []);
  
  return (
    <div className='my-8'>
        <div className='pb-4'>
            <h2 className='text-[--primary] dark:text-[--heading-color] text-xl font-semibold'>Latest Blog Post</h2>
        </div>
        <div className='grid grid-cols-12 grid-rows-1 gap-8 max-sm:gap-4 max-md:gap-x-4'>
        {
            blogs?.slice().reverse().map((item, i) => (
                <div key={i} className='col-span-4 row-span-1 max-lg:col-span-6 max-sm:col-span-12'>
                <Card item={item} />
                </div>
            ))
        }
        </div>
        <div className='text-center my-2'>
            <Link href={"/blog"}>
             <button className='bg-[--secondary] text-[--white] px-6 py-1 rounded-xl font-semibold hover:bg-[--secondary-dark] transition-all duration-300'>View More Blog</button>
            </Link>
        </div>
    </div>
  )
}

export default Blogs