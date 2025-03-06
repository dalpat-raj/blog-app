import Image from 'next/image'
import React from 'react'

const Advertisment = () => {
  return (
    <div className='my-12' >
        <h2 className='text-center pb-2'>- Advertisement -</h2>
        <div className='max-md:w-full flex justify-center items-center'>
          <div className='w-[65%] max-md:w-full rounded-lg overflow-hidden'>
          <Image
          src={"/assets/ads/ad.jpg"}
          alt='advertisement'
          width={0}
          height={0}
          sizes='100vw'
          style={{width: "100%", height: '100%', objectFit: "cover"}}
          />
          </div>
        </div>
    </div>
  )
}

export default Advertisment