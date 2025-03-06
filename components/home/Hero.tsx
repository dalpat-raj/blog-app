import { dummy_Data } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { MdOutlineWatchLater } from 'react-icons/md';

const Hero = () => {

    const [item1, item2, item3] = dummy_Data || [];

  return (
    <div className='my-12 max-sm:my-8 text-[--white]'>
        <div className='grid grid-cols-12 grid-rows-2 gap-8 max-md:gap-4'> 
            <Link href={`/blog/${item1.id}`} className='col-span-8 row-span-2 max-[990px]:col-span-12 max-sm:col-span-12'>
                <div className='relative h-full overflow-hidden rounded-lg'>
                    <Image
                    src={item1.image}
                    alt={item1.title}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{width: "100%", height: "100%", objectFit: "fill"}}
                    />
                    <div className="bg-blackOverlay h-full absolute bottom-[-15%] max-sm:bottom-0 hover:bottom-0 transition-all duration-300 left-0 flex items-end pb-6 max-sm:pb-0">
                        <div className="px-8 max-sm:px-4">
                            <button className="bg-[#ebc272] px-4 py-0 rounded-xl">Recipe</button>
                            <h4 className="text-[32px] max-md:text-[24px] max-sm:text-[18px] leading-[45px] max-md:leading-[32px] max-sm:leading-[24px] font-extrabold py-2">
                            {item1.title}
                            </h4>
                            <p className="text-lg max-md:text-md py-2  max-md:leading-[24px] max-sm:leading-[18px] max-sm:text-[14px] max-sm:py-1">
                            {item1.description}
                            </p>
                            <div className="flex justify-start max-sm:justify-between gap-8 py-2">
                            <div className="inline-flex items-center gap-6">
                                <div className="w-[35px] h-[35px] overflow-hidden rounded-full">
                                <Image
                                    src={"/assets/users/a1.jpg"}
                                    alt="hero image 1"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                                </div>
                                <span>Elizabeth</span>
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <div className="text-xl">
                                <MdOutlineWatchLater />
                                </div>
                                <span>Oct 3, 2020</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </Link>

            {/* column 2 box 2 */}
            <Link href={`/blog/${item2.id}`} className='col-span-4 row-span-1 max-[990px]:col-span-6 max-sm:col-span-12'>
                <div className='relative h-full overflow-hidden rounded-lg'>
                    <Image
                    src={item2.image}
                    alt={item2.title}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{width: "100%", height: "100%", objectFit: 'fill'}}
                    />
                    <div className="w-full background_light h-full absolute bottom-[-10%] max-sm:bottom-0 hover:bottom-0 transition-all duration-300 left-0 flex items-end  ">
                        <div className="px-8 max-sm:px-4 pb-6 max-sm:pb-0">
                            <h4 className="text-xl leading-[32px] font-extrabold py-2">
                            {item2.title}
                            </h4>
                            <div className="inline-flex items-center gap-2">
                                <div className="text-xl">
                                <MdOutlineWatchLater />
                                </div>
                                <span>Oct 3, 2020</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            {/* column 2 box 3 */}
            <Link href={`/blog/${item3.id}`} className='col-span-4 row-span-1 max-[990px]:col-span-6 max-sm:col-span-12'>
                <div className='relative h-full overflow-hidden rounded-lg'>
                    <Image
                    src={item3.image}
                    alt={item3.title}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{width: "100%", height: "100%", objectFit: "fill"}}
                    />
                    <div className="w-full background_light h-full absolute bottom-[-10%] max-sm:bottom-0 hover:bottom-0 transition-all duration-300 left-0 flex items-end  ">
                        {/* <div className="px-8 max-sm:px-4 pb-6 max-sm:pb-0">
                            <h4 className="text-xl leading-[32px] font-extrabold py-2">
                            {item3.title}
                            </h4>
                            <div className="inline-flex items-center gap-2">
                                <div className="text-xl">
                                <MdOutlineWatchLater />
                                </div>
                                <span>Oct 3, 2020</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Hero