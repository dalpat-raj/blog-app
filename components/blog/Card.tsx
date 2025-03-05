import { BlogData } from '@/lib/definations'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { MdOutlineWatchLater } from 'react-icons/md'

const Card = ({item}: {item : BlogData}) => {

    return (
        <div className=''>
        <Link href={`/blog/${item.id}`}>
            <div className='relative overflow-hidden rounded-lg w-full h-[200px]'>
                <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                />
                <div className='w-full h-full bg-heroHover absolute bottom-0 left-0 p-4 flex items-end gap-4 text-[--white] cursor-pointer'>
                    <button className='bg-[--secondary] px-4 py-0 rounded-xl font-semibold'>Reciepe</button>
                    <div className='inline-flex items-center gap-2'>
                        <div className='text-xl'><MdOutlineWatchLater/></div>
                        <span>Oct 3, 2020</span>
                    </div>
                </div>
            </div>
        </Link>
        <div className='py-4'>
            <Link href={`/blog/${item.id}`}>
            <h4 className='text-[--primary] dark:text-[--heading-color] text-[19px] leading-[28px] font-bold cursor-pointer hover:text-[--secondary] hover:dark:text-[--secondary] duration-200 transition-all'>{item?.title}</h4>
            </Link>
            <p className='text-md font-normal text-[--dark-gray] dark:text-[--light-gray] py-3 max-sm:py-2'>
                {item?.description.length >= 40 ? item?.description.slice(0, 40) : item.description} ...
            </p>
            <div className='flex justify-between items-center gap-8 py-2'>
                <div className='inline-flex items-center gap-6'>
                    <div className='w-[30px] h-[30px] overflow-hidden rounded-full'>
                        <Image
                            src={"/assets/users/a1.jpg"}
                            alt='hero image 1'
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{width: "100%", height: "100%", objectFit: "cover"}}
                        />
                    </div>
                    <span className=' text-md font-bold dark:text-[--heading-color]'>
                        Elizabeth
                    </span>
                </div>
                <Link href={`/blog/${item.id}`}>
                    <div className='flex items-center justify-start gap-2 text-[--gray] font-semibold cursor-pointer transition-all hover:text-[--secondary] hover:gap-4'>
                        <span className='opacity-80'>Read More</span>
                        <div className='text-lg text'><HiArrowRight/></div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Card